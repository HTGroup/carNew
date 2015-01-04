module.exports = (req, res, next) ->
    passport.initialize() req, res, ->
        passport.session() req, res, ->
            res.locals.user = req.user
            next()
            return
        return
    return