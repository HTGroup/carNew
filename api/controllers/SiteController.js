(function() {
  var SiteController;

  SiteController = {
    main: function(req, res) {
      res.locals.user;
      res.view({
        layout: false
      });
    },
    about: function(req, res) {
      res.view({
        layout: false
      });
    }
  };

  module.exports = SiteController;

}).call(this);
