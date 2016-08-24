// add the week number to the form
$("#weekly").on("submit", function () {
  $('<fieldset><input type="hidden" id="week" name="Week" value="Week '+parseFloat(week + 1)+'"></fieldset>').appendTo('.hidden');
});

// capture the submitters email and put it in as the _cc value
$(function() {
  $('#email').change(function() {
    var value = $(this).val();
    $('#copy') .val(value);
  });
});

// Use localstorage to keep form fields completed
$(function() {
  $(window).unload(saveSettings);
  loadSettings();
});

function loadSettings() {
  $('#name').val(localStorage.name);
  $('#email').val(localStorage.email);
}

function saveSettings() {
  localStorage.name = $('#name').val();
  localStorage.email = $('#email').val();
}
