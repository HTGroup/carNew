PanelController =
  index: (req, res) ->

    res.redirect "/login" if not res.locals.user?

    res.view
      styles: [
        "js/jvectormap/jquery-jvectormap-1.2.2.css"
        "js/rickshaw/rickshaw.min.css"
        "js/select2/select2-bootstrap.css"
        "js/select2/select2.css"
      ]
      scripts: [
        "js/select2/select2.min.js"
        "js/jvectormap/jquery-jvectormap-europe-merc-en.js"
        "js/jquery.sparkline.min.js"
        "js/rickshaw/vendor/d3.v3.js"
        "js/rickshaw/rickshaw.min.js"
        "js/raphael-min.js"
        "js/morris.min.js"
        "js/jquery.inputmask.bundle.min.js"
        "js/toastr.js"
        "js/fullcalendar/fullcalendar.min.js"
        "js/neon-chat.js"
        "js/jquery.cropit.min.js"
        "site/profile_index.js"
      ]
      user: res.locals.user


    console.log res.locals.user
    return
  save: (req, res) ->
    return 1




module.exports = PanelController
