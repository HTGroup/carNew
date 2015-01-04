(function() {
  var PanelController;

  PanelController = {
    index: function(req, res) {
      res.view({
        styles: ["js/jvectormap/jquery-jvectormap-1.2.2.css", "js/rickshaw/rickshaw.min.css"],
        scripts: ["js/jvectormap/jquery-jvectormap-europe-merc-en.js", "js/jquery.sparkline.min.js", "js/rickshaw/vendor/d3.v3.js", "js/rickshaw/rickshaw.min.js", "js/raphael-min.js", "js/morris.min.js", "js/toastr.js", "js/fullcalendar/fullcalendar.min.js", "js/neon-chat.js"]
      });
    }
  };

  module.exports = PanelController;

}).call(this);
