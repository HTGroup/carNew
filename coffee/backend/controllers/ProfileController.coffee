PanelController =
  index: (req, res) ->

    PanelController.reload(res)

    async = require('async')

    async.parallel {
      styles: (callback) ->
        callback null, [
          "js/jvectormap/jquery-jvectormap-1.2.2.css"
          "js/rickshaw/rickshaw.min.css"
          "js/select2/select2-bootstrap.css"
          "js/select2/select2.css"
        ]
      scripts: (callback) ->
        callback null, [
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
      region: (callback)->
        Region.find({sort: 'name ASC'}).populate('cities', {sort: 'name ASC'}).exec (err,r)->
          callback err, r

    }, (err, results) ->
      res.view
        styles: results.styles
        scripts: results.scripts
        user: res.locals.user
        region: results.region

  save: (req, res) ->

    PanelController.reload(res)

    switch req.param("type")
      when "avatar"
        fs = require("fs")
        image = "/avatars/"+PanelController.makeid()+"_"+Date.now()+".jpg"
        buff = new Buffer(req.body.image.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
        fs.writeFileSync "./assets"+image, buff
        fs.writeFile "./.tmp/public"+image, buff, (err)->
          res.locals.user.avatar = image if res.locals.user?
          if err?
            res.json
              error: err
          else
            User.update { id: res.locals.user.id }, { avatar: image }, (err, user) ->
              res.json
                error: err
            return
      when "profile"
        User.update { id: res.locals.user.id }, req.body, (err, user) ->
          res.locals.user = PanelController.merge res.locals.user, req.body
          res.json
            error: err
      else
        return null



  reload: (res)->
    return res.redirect "/login" if not res.locals.user?

  merge: (xs...) ->
    if xs?.length > 0
      PanelController.tap {}, (m) -> m[k] = v for k, v of x for x in xs

  tap: (o, fn) -> fn(o); o


  makeid: ->
    charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    randomString = ''
    i = 0
    while i < 5
      randomPoz = Math.floor(Math.random() * charSet.length)
      randomString += charSet.substring(randomPoz, randomPoz + 1)
      i++
    randomString




module.exports = PanelController
