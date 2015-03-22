(function() {
  var PanelController,
    __slice = [].slice;

  PanelController = {
    index: function(req, res) {
      var async;
      PanelController.reload(res);
      async = require('async');
      return async.parallel({
        styles: function(callback) {
          return callback(null, ["js/jvectormap/jquery-jvectormap-1.2.2.css", "js/rickshaw/rickshaw.min.css", "js/select2/select2-bootstrap.css", "js/select2/select2.css"]);
        },
        scripts: function(callback) {
          return callback(null, ["js/select2/select2.min.js", "js/jvectormap/jquery-jvectormap-europe-merc-en.js", "js/jquery.sparkline.min.js", "js/rickshaw/vendor/d3.v3.js", "js/rickshaw/rickshaw.min.js", "js/raphael-min.js", "js/morris.min.js", "js/jquery.inputmask.bundle.min.js", "js/toastr.js", "js/fullcalendar/fullcalendar.min.js", "js/neon-chat.js", "js/jquery.cropit.min.js", "site/profile_index.js"]);
        },
        region: function(callback) {
          return Region.find({
            sort: 'name ASC'
          }).populate('cities', {
            sort: 'name ASC'
          }).exec(function(err, r) {
            return callback(err, r);
          });
        }
      }, function(err, results) {
        return res.view({
          styles: results.styles,
          scripts: results.scripts,
          user: res.locals.user,
          region: results.region
        });
      });
    },
    save: function(req, res) {
      var buff, fs, image;
      PanelController.reload(res);
      switch (req.param("type")) {
        case "avatar":
          fs = require("fs");
          image = "/avatars/" + PanelController.makeid() + "_" + Date.now() + ".jpg";
          buff = new Buffer(req.body.image.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
          fs.writeFileSync("./assets" + image, buff);
          return fs.writeFile("./.tmp/public" + image, buff, function(err) {
            if (res.locals.user != null) {
              res.locals.user.avatar = image;
            }
            if (err != null) {
              return res.json({
                error: err
              });
            } else {
              User.update({
                id: res.locals.user.id
              }, {
                avatar: image
              }, function(err, user) {
                return res.json({
                  error: err
                });
              });
            }
          });
        case "profile":
          return User.update({
            id: res.locals.user.id
          }, req.body, function(err, user) {
            res.locals.user = PanelController.merge(res.locals.user, req.body);
            return res.json({
              error: err
            });
          });
        default:
          return null;
      }
    },
    reload: function(res) {
      if (res.locals.user == null) {
        return res.redirect("/login");
      }
    },
    merge: function() {
      var xs;
      xs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if ((xs != null ? xs.length : void 0) > 0) {
        return PanelController.tap({}, function(m) {
          var k, v, x, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = xs.length; _i < _len; _i++) {
            x = xs[_i];
            _results.push((function() {
              var _results1;
              _results1 = [];
              for (k in x) {
                v = x[k];
                _results1.push(m[k] = v);
              }
              return _results1;
            })());
          }
          return _results;
        });
      }
    },
    tap: function(o, fn) {
      fn(o);
      return o;
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
