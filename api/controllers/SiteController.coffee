
SiteController =
    main: (req, res) ->
        passport = require("passport")
        console.log req.user, passport, req.session, res.locals.user, res.user
        res.view()
        return



module.exports = SiteController