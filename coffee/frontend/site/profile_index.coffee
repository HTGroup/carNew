$ = jQuery
$ ->
  $("#save_profile").click ->
    $.ajax(
      type: "POST"
      url: "/user/save/profile"
      data: $( "#form_profile" ).serialize()
      dataType: "json"
    ).done (data)->
      console.log(data)
    return

  slider = $("#zoomCrop").slider
    orientation: 'horizontal'
    min: 1
    max: 100
    step: 1
    slide: (e, ui) ->
      $imageCropper.cropit('zoom', ui.value/100);
      return
    change: (ev, ui) ->
      $imageCropper.cropit('zoom', ui.value/100);
      return

  $("#cropit-image-input").on "change", ->
    $(".slider .ui-slider-handle").css("left", 0)
    $('#modal-1').modal('show');
    return

  $('#modal-1').on 'hidden.bs.modal', ->
    $("#cropit-image-input").val("")
    return

  $imageCropper = $('#image-cropper').cropit
    imageBackground: true
    imageBackgroundBorderWidth: 15

  $("#saveAvatar").on "click", ->
    newImage = $imageCropper.cropit 'export',
      type: 'image/jpeg'
      quality: .9
    $.ajax(
      type: "POST"
      url: "/user/save/avatar"
      data:
        image: newImage
      dataType: "json"
    ).done (data)->
      if data? and not data.error?
        $("#saveAvatar").val("")
        $("#cropit-image-input").val("")
        $("#imgUser").prop("src", newImage)
        $("#my_avatar").prop("src", newImage)
        $('#modal-1').modal('hide')


  return

