(function() {
  var PanelController;

  PanelController = {
    index: function(req, res) {
      if (res.locals.user == null) {
        return res.redirect("/login");
      }
      res.view({
        styles: ["js/jvectormap/jquery-jvectormap-1.2.2.css", "js/rickshaw/rickshaw.min.css", "js/select2/select2-bootstrap.css", "js/select2/select2.css"],
        scripts: ["js/select2/select2.min.js", "js/jvectormap/jquery-jvectormap-europe-merc-en.js", "js/jquery.sparkline.min.js", "js/rickshaw/vendor/d3.v3.js", "js/rickshaw/rickshaw.min.js", "js/raphael-min.js", "js/morris.min.js", "js/jquery.inputmask.bundle.min.js", "js/toastr.js", "js/fullcalendar/fullcalendar.min.js", "js/neon-chat.js", "js/jquery.cropit.min.js", "site/profile_index.js"],
        user: res.locals.user
      });
      console.log(res.locals.user);
    },
    save: function(req, res) {
      var buff, fs, image;
      console.log(req.body);
      fs = require("fs");
      image = "/avatars/" + PanelController.makeid() + "_" + Date.now() + ".jpg";
      buff = new Buffer(req.body.image.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
      fs.writeFile("./assets" + image, buff, function(err) {
        if (res.locals.user != null) {
          res.locals.user.avatar = image;
        }
        console.log(res.locals.user);
        return res.json({
          error: err
        });
      });
    },
    makeid: function() {
      var charSet, i, randomPoz, randomString;
      charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      randomString = '';
      i = 0;
      while (i < 5) {
        randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
        i++;
      }
      return randomString;
    }
  };

  module.exports = PanelController;

}).call(this);
