$(document).ready(function() {
  $("form.favoriteForm").submit(function(event) {
    event.preventDefault(event);
    console.log("hi");

    var scorpion = $("#scorpionSelect").val();
    var pant = $("#pantSelect").val();
    var passtime = $("#passtimeSelect").val();

    var favorites = [scorpion, pant, passtime]
    console.log(favorites);

    $("#favorite1").text(favorites[0]);
    $("#favorite2").text(favorites[1]);
    $("#favorite3").text(favorites[2]);

  })



})
