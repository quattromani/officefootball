 // ID of the Google Spreadsheet
 var spreadsheetID = "1_w6b0iUDaUbKD6qLD52BcRG1pIMh90P-Av4o0w5TAB8";

 // Make sure it is public or set to Anyone with link can view
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/default/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;

  // count the players
  var playerCount = entry.length;
  $('.player-count').append("<span>"+playerCount+"</span>");

  // calculate the pot
  var weeklyPot = ((playerCount * 5) * .9).toFixed(2);
  var seasonPot = '175.50';
  $('.weekly-pot').append("<span> $"+weeklyPot+"</span>");
  $('.season-pot').append("<span> $"+seasonPot+"</span>");

  // Pick trends


});


