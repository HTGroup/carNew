$ = jQuery
$ ->
  $("#save_profile").click ->
    console.log($( "form#form_profile" ).serialize())
    return
  return
