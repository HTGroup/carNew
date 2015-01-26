(function() {
  var $;

  $ = jQuery;

  $(function() {
    $("#save_profile").click(function() {
      console.log($("form#form_profile").serialize());
    });
  });

}).call(this);
