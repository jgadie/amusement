$(document).ready(function() {
  $("form#userheight").submit(function(event) {
  var height = parseInt($("input#height").val());
  var excitement = parseInt($("input#excitement").val());

  if (height === 65 && excitement === 3) {
    $('#average-height').show();
  } else if (height > 65 && excitement < 3) {
    alert("You're too tall!");
    $('#tall-height').show();
  } else {
//    (height < 65)
    $('#short-height').show();
  }
    event.preventDefault();
  });
});
