$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height === 65) {
    $('#average-height').show();
  } else if (height > 65) {
    alert("You're too tall!");
    $('#tall-height').show();
  } else {
//    (height < 65)
    $('#short-height').show();
  }
});
