(function() {
  var CarController;

  CarController = {
    index: function(req, res) {
      return CarController.reload(res);
    },
    settings: function(req, res) {
      return res.view({
        scripts: ["js/jquery.bootstrap.wizard.min.js", "js/jquery.validate.min.js", "js/jquery.inputmask.bundle.min.js", "js/selectboxit/jquery.selectBoxIt.min.js", "js/bootstrap-datepicker.js", "js/bootstrap-switch.min.js", "js/jquery.multi-select.js", "js/neon-chat.js"]
      });
    },
    reload: function(res) {
      if (res.locals.user == null) {
        return res.redirect("/login");
      }
    }
  };

  module.exports = CarController;

}).call(this);
