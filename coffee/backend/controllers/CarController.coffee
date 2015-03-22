CarController =
  index: (req, res) ->

    CarController.reload(res)



  settings: (req, res) ->





    #CarController.reload(res)
    res.view
      scripts: [
        "js/jquery.bootstrap.wizard.min.js"
        "js/jquery.validate.min.js"
        "js/jquery.inputmask.bundle.min.js"
        "js/selectboxit/jquery.selectBoxIt.min.js"
        "js/bootstrap-datepicker.js"
        "js/bootstrap-switch.min.js"
        "js/jquery.multi-select.js"
        "js/neon-chat.js"
      ]


  reload: (res)->
    return res.redirect "/login" if not res.locals.user?


module.exports = CarController
