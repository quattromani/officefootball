// add the week number to the form
$("#weekly").on("submit", function () {
  $('<fieldset><input type="hidden" name="Week" value="Week '+week_number+'"></fieldset>').appendTo('.hidden');
});

// capture the submitters email and put it in as the _cc value
$(function() {
  $('#email').change(function() {
    var value = $(this).val();
    $('#copy') .val(value);
  });
});



$(function () {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"]);
    }
  }
  init();
});

$('.stored').keyup(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});
