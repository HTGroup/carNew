(function() {
  var $;

  $ = jQuery;

  $(function() {
    var $imageCropper, slider;
    $("#save_profile").click(function() {
      $.ajax({
        type: "POST",
        url: "/user/save/profile",
        data: $("#form_profile").serialize(),
        dataType: "json"
      }).done(function(data) {
        $(document).find(".myName").text($("#field-1").val());
        $("#save_profile").removeClass("btn-default").addClass("btn-success");
        return setTimeout(function() {
          return $("#save_profile").addClass("btn-default").removeClass("btn-success");
        }, 5000);
      });
    });
    slider = $("#zoomCrop").slider({
      orientation: 'horizontal',
      min: 1,
      max: 100,
      step: 1,
      slide: function(e, ui) {
        $imageCropper.cropit('zoom', ui.value / 100);
      },
      change: function(ev, ui) {
        $imageCropper.cropit('zoom', ui.value / 100);
      }
    });
    $("#cropit-image-input").on("change", function() {
      $(".slider .ui-slider-handle").css("left", 0);
      $('#modal-1').modal('show');
    });
    $('#modal-1').on('hidden.bs.modal', function() {
      $("#cropit-image-input").val("");
    });
    $imageCropper = $('#image-cropper').cropit({
      imageBackground: true,
      imageBackgroundBorderWidth: 15
    });
    $("#saveAvatar").on("click", function() {
      var newImage;
      newImage = $imageCropper.cropit('export', {
        type: 'image/jpeg',
        quality: .9
      });
      return $.ajax({
        type: "POST",
        url: "/user/save/avatar",
        data: {
          image: newImage
        },
        dataType: "json"
      }).done(function(data) {
        if ((data != null) && (data.error == null)) {
          $("#saveAvatar").val("");
          $("#cropit-image-input").val("");
          $("#imgUser").prop("src", newImage);
          $("#my_avatar").prop("src", newImage);
          return $('#modal-1').modal('hide');
        }
      });
    });
  });

}).call(this);
