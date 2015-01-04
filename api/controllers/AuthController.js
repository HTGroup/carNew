(function() {
  var AuthController;

  AuthController = {
    login: function(req, res) {
      var providers, strategies;
      strategies = sails.config.passport;
      providers = {};
      Object.keys(strategies).forEach(function(key) {
        if (key === "local") {
          return;
        }
        providers[key] = {
          name: strategies[key].name,
          slug: key
        };
      });
      res.view({
        layout: "layout_free",
        scripts: ["js/jquery.validate.min.js", "js/neon-login.js"],
        classpage: ["login-page login-form-fall loaded login-form-fall-init"],
        providers: providers,
        errors: req.flash("error")
      });
    },
    logout: function(req, res) {
      req.logout();
      res.redirect("/");
    },
    register: function(req, res) {
      res.view({
        layout: "layout_free",
        scripts: ["js/jquery.inputmask.bundle.min.js", "js/jquery.validate.min.js", "js/neon-register.js"],
        classpage: ["login-page login-form-fall"],
        errors: req.flash("error")
      });
    },
    provider: function(req, res) {
      passport.endpoint(req, res);
    },
    callback: function(req, res) {
      var tryAgain;
      tryAgain = function(err) {
        var action, flashError;
        flashError = req.flash("error")[0];
        if (err && !flashError) {
          req.flash("error", "Error.Passport.Generic");
          flashError = "Error.Passport.Generic";
        } else {
          if (flashError) {
            req.flash("error", flashError);
          }
        }
        req.flash("form", req.body);
        action = req.param("action");
        res.json({
          login_status: 'invalid',
          error: flashError
        });

        /*switch action
          when "register"
            res.redirect "/register"
          when "disconnect"
            res.redirect "back"
          else
            res.redirect "/login"
         */
      };
      passport.callback(req, res, function(err, user) {
        if (err) {
          return tryAgain();
        }
        req.login(user, function(err) {
          if (err) {
            return tryAgain();
          }
          delete req.body.password;
          res.json({
            login_status: 'success',
            redirect_url: '/panel',
            submitted_data: req.body
          });
        });
      });
    },
    disconnect: function(req, res) {
      passport.disconnect(req, res);
    }
  };

  module.exports = AuthController;

}).call(this);
