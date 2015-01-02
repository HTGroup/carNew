AuthController =
  login: (req, res) ->
    strategies = sails.config.passport
    providers = {}

    # Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach (key) ->
      return  if key is "local"
      providers[key] =
        name: strategies[key].name
        slug: key

      return

    res.view
      layout: "layout_free"
      scripts: [
        "js/jquery.validate.min.js"
        "js/neon-login.js"
      ]
      classpage: ["login-page login-form-fall loaded login-form-fall-init"]
      providers: providers
      errors: req.flash("error")

    return

  logout: (req, res) ->
    req.logout()
    res.redirect "/"
    return

  register: (req, res) ->
    res.view
      layout: "layout_free"
      scripts: [
        "js/jquery.inputmask.bundle.min.js"
        "js/jquery.validate.min.js"
        "js/neon-register.js"
      ]
      classpage: ["login-page login-form-fall"]
      errors: req.flash("error")
    return

  provider: (req, res) ->
    passport.endpoint req, res
    return

  callback: (req, res) ->
    tryAgain = (err) ->

      flashError = req.flash("error")[0]
      if err and not flashError
        req.flash "error", "Error.Passport.Generic"
        flashError = "Error.Passport.Generic"
      else
        req.flash "error", flashError  if flashError
      req.flash "form", req.body

      action = req.param("action")
      res.json
        login_status: 'invalid'
        error: flashError
      ###switch action
        when "register"
          res.redirect "/register"
        when "disconnect"
          res.redirect "back"
        else
          res.redirect "/login"###
      return

    passport.callback req, res, (err, user) ->
      return tryAgain()  if err
      req.login user, (err) ->
        return tryAgain()  if err
        delete req.body.password
        res.json
          login_status: 'success'
          redirect_url: '/'
          submitted_data: req.body
        return

      return

    return

  disconnect: (req, res) ->
    passport.disconnect req, res
    return

module.exports = AuthController