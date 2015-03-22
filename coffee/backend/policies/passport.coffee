module.exports = (req, res, next) ->
    passport.initialize() req, res, ->
        passport.session() req, res, ->
          if req.user?
            User.findById(req.user.id).populate("city").exec (err, user)->
              res.locals.user = user[0]
              next()
              return
            return
          else
            res.locals.user = req.user
            next()
            return
        return
    return
