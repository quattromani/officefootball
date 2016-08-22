var week1 = new Date('9/2/2016');
var week2 = new Date('9/9/2016');
var week3 = new Date('9/16/2016');
var week4 = new Date('9/23/2016');
var week5 = new Date('9/30/2016');
var week6 = new Date('10/7/2016');
var week7 = new Date('10/14/2016');
var week8 = new Date('10/21/2016');
var week9 = new Date('10/28/2016');
var week10 = new Date('11/4/2016');
var week11 = new Date('11/11/2016');
var week12 = new Date('11/18/2016');
var week13 = new Date('11/25/2016');
var week14 = new Date('12/2/2016');
var week15 = new Date('12/9/2016');
var week16 = new Date('12/16/2016');
var week17 = new Date('12/2/2016');
var week16 = new Date('12/9/2016');
var week17 = new Date('12/16/2016');
var week18 = new Date('12/23/2016');

var today = new Date();
if (week1 > today) {
  var week = 0;
} if (week1 <= today) {
  var week = 0;
} if (week2 <= today) {
  var week = 1;
} if (week3 <= today) {
  var week = 2;
} if (week4 <= today) {
  var week = 3;
} if (week5 <= today) {
  var week = 4;
} if (week6 <= today) {
  var week = 5;
} if (week7 <= today) {
  var week = 6;
} if (week8 <= today) {
  var week = 7;
} if (week9 <= today) {
  var week = 8;
} if (week10 <= today) {
  var week = 9;
} if (week11 <= today) {
  var week = 10;
} if (week12 <= today) {
  var week = 11;
} if (week13 <= today) {
  var week = 12;
} if (week14 <= today) {
  var week = 13;
} if (week15 <= today) {
  var week = 14;
} if (week16 <= today) {
  var week = 15;
} if (week17 <= today) {
  var week = 16;
} if (week18 <= today) {
  var week = 17;
} else {

}

var plus_one = 1;
var week_number = week + plus_one;

var gamesTotal = 132;

// Get JSON for schedule
$.ajax({
  dataType: 'json',
  url: '/json/nfl2016.json',
  success: function(data) {
    // Label the week
    $('<span class="text-center">Week '+week_number+'</span>').appendTo('h1');
    $('#subject').val('Week ' +week_number+ ' Picks');
    // get the number of game days
    for (i = 0; i < data[week].game_days.length; i++) {

      // set number of matches per game day
      for (m = 0; m < data[week].game_days[i].matches.length; m++) {

        // variabilize the games
        var game_id = data[week].game_days[i].matches[m].id;
        var location = data[week].game_days[i].matches[m].stadium;
        var away_id = data[week].game_days[i].matches[m].away.id;
        var home_id = data[week].game_days[i].matches[m].home.id;

        // let's get the game time and format it
        Number.prototype.pad = function (len) {
          return (new Array(len+1).join("0") + this).slice(-len);
        }
        var timestamp = new Date(data[week].game_days[i].matches[m].timestamp);
        var hours = timestamp.getHours() % 12 || 12;
        var minutes = timestamp.getMinutes().pad(2);
        var time = +hours+ ':' +minutes;

        //variabilize the teams
        var away = data[week].game_days[i].matches[m].away.nick;
        var home = data[week].game_days[i].matches[m].home.nick;

        var day_of_game = data[week].game_days[i].matches[m].timestamp.slice(0,3);

        // If Monday add game total inputs
        if (day_of_game == 'Mon') {
          $('<li>
            <div class="row marginless">
            <div class="teams">
            <div class="half">
            <input type="radio" class="radio" id="'+away_id+'" name="'+game_id+'" value="'+away+'" required>
            <label for="'+away_id+'"><img src="images/logos/'+away+'.png" style="float: right;" alt="'+away+'" />'+away+'</label>
            </div>
            <div class="half">
            <input type="radio" class="radio" id="'+home_id+'" name="'+game_id+'" value="'+home+'" required>
            <label for="'+home_id+'"><img src="images/logos/'+home+'.png" style="float: left;" alt="'+home+'" />'+home+'</label>
            </div>
            </div>
            <div class="full location">
            <strong>'+location+'</strong> - '+time+' MST
            </div>
            <div class="full">
            <label for="'+game_id+'" class="total_score">Game Total:</label>
            <input type="text" class="total_score" id="'+game_id+'" name="'+game_id+'">
            </div>
            </div>
            </li>').appendTo('.matches');
          } else { // or don't
          $('<li>
            <div class="row marginless">
            <div class="teams">
            <div class="half">
            <input type="radio" class="radio" id="'+away_id+'" name="'+game_id+'" value="'+away+'" required>
            <label for="'+away_id+'"><img src="images/logos/'+away+'.png" style="float: right;" alt="'+away+'" />'+away+'</label>
            </div>
            <div class="half">
            <input type="radio" class="radio" id="'+home_id+'" name="'+game_id+'" value="'+home+'" required>
            <label for="'+home_id+'"><img src="images/logos/'+home+'.png" style="float: left;" alt="'+home+'" />'+home+'</label>
            </div>
            </div>
            <div class="full location">
            <strong>'+location+'</strong> - '+time+' MST
            </div>
            </div></li>').appendTo('.matches');
        }
      }
    }
  }
});

// Get JSON for schedule
// $.ajax({
//   dataType: 'json',
//   url: '/json/records.json',
//   success: function(data) {

//     for (i = 0; i < data.length; i++) {
//       var wins = data[i].wins;
//       var ties = data[i].ties;
//       var losses = data[i].losses;

//       var teamRecord = (wins+ '-' +ties+ '-' +losses);
//       $('<div class="row marginless"><div class="half records">'+teamRecord+'</div></div>').appendTo('.teams');
//     }
//   }
// });
