(function() {
  module.exports = function(req, res, next) {
    passport.initialize()(req, res, function() {
      passport.session()(req, res, function() {
        if (req.user != null) {
          User.findById(req.user.id).populate("city").exec(function(err, user) {
            res.locals.user = user[0];
            next();
          });
        } else {
          res.locals.user = req.user;
          next();
        }
      });
    });
  };

}).call(this);
