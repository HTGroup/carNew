
SiteController =
    main: (req, res) ->
        res.locals.user
        res.view
            layout: false
        return

    about: (req, res) ->
        res.view
            layout: false
        return


module.exports = SiteController