var week1 = new Date();
var week2 = new Date('9/15/2016');
var week3 = new Date('9/22/2016');
var week4 = new Date('9/29/2016');
var week5 = new Date('10/6/2016');
var week6 = new Date('10/13/2016');
var week7 = new Date('10/20/2016');
var week8 = new Date('10/27/2016');
var week9 = new Date('11/3/2016');
var week10 = new Date('11/10/2016');
var week11 = new Date('11/17/2016');
var week12 = new Date('11/24/2016');
var week13 = new Date('12/1/2016');
var week14 = new Date('12/8/2016');
var week15 = new Date('12/15/2016');
var week16 = new Date('12/22/2016');
var week17 = new Date('1/1/2017');
var week18 = new Date('1/8/2017');

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

var gamesTotal = 207;

getData(week);

$(document).on('click touchstart', '.pag', function () {
  $('.matches').html('');
  getData($(this).data('week'));
});

function getData(week) {
  // Get JSON for schedule
  $('.week-nav').html('');
  $.ajax({
    dataType: 'json',
    url: '/json/nfl2016.json',
    success: function(data) {
    // Label the week
    $('<span class="text-center week-nav"><span class="pag prev" data-week="'+parseFloat(week - 1)+'"></span> Week '+parseFloat(week + 1)+' <span class="pag next" data-week="'+parseFloat(week + 1)+'"></span> </span>').appendTo('#weekly h1');
    if (week == 0) {
      $('.prev').hide();
    } else if (week == 16) {
      $('.next').hide();
    }
    $('#subject').val('Week '+parseFloat(week + 1)+' Picks');
    // get the number of game days
    for (i = 0; i < data[week].game_days.length; i++) {

      // set number of matches per game day
      for (m = 0; m < data[week].game_days[i].matches.length; m++) {

        // variabilize the games
        var game_date = data[week].game_days[i].date;
        var game_id = data[week].game_days[i].matches[m].id;
        var last_game = data[week].game_days[i].matches[m].last;
        var location = data[week].game_days[i].matches[m].stadium;
        var station = data[week].game_days[i].matches[m].tv;
        var away_id = data[week].game_days[i].matches[m].away.nick;
        var home_id = data[week].game_days[i].matches[m].home.nick;

        // let's get the game time and format it
        Number.prototype.pad = function (len) {
          return (new Array(len+1).join("0") + this).slice(-len);
        }
        var timestamp = new Date(data[week].game_days[i].matches[m].timestamp);
        var day_of_game = data[week].game_days[i].matches[m].timestamp.slice(0,3);
        var hours = timestamp.getHours() % 12 || 12;
        var minutes = timestamp.getMinutes().pad(2);
        var time = +hours+ ':' +minutes;

        // variabilize the teams
        var away = data[week].game_days[i].matches[m].away.nick;
        var home = data[week].game_days[i].matches[m].home.nick;

        // color the chosen label with team color
        var labelID;

        $('label').click(function() {
         labelID = $(this).attr('for');
       });

        // if Monday add game total inputs
        if (last_game == true) {
          $('<h3>Tie-Breaker Game</h3><li>
            <div class="teams">
            <div class="half away">
            <input type="radio" class="radio" id="'+away_id+'" name="Game'+game_id+'" value="'+away+'" required>
            <label for="'+away_id+'"><img src="/images/logos/'+away+'.png" style="float: right;" alt="'+away+' logo" />'+away+'</label>
            <span class="standings"></span>
            </div>
            <div class="half home">
            <input type="radio" class="radio" id="'+home_id+'" name="Game'+game_id+'" value="'+home+'" required>
            <label for="'+home_id+'"><img src="/images/logos/'+home+'.png" style="float: left;" alt="'+home+' logo" />'+home+'</label>
            <span class="standings"></span>
            </div>
            </div>
            <div class="full location mon">
            <strong> '+day_of_game+' '+time+' MST on '+station+'</strong> <span class="mobile-hidden"> - </span> <br class="rwd-break">'+location+'
            </div>
            <div class="full">
            <label for="'+game_id+'" class="total_score">Game Total:</label>
            <input type="number" min="0" inputmode="numeric" pattern="[0-9]*" class="total_score" id="'+game_id+'" name="Score'+game_id+'" placeholder="0" required>
            </div>
            </li>').appendTo('.matches');
          } else { // or don't
          $('<li>
            <div class="teams">
            <div class="half away">
            <input type="radio" class="radio" id="'+away_id+'" name="Game'+game_id+'" value="'+away+'" required>
            <label for="'+away_id+'"><img src="/images/logos/'+away+'.png" style="float: right;" alt="'+away+' logo" />'+away+'</label>
            <span class="standings"></span>
            </div>
            <div class="half home">
            <input type="radio" class="radio" id="'+home_id+'" name="Game'+game_id+'" value="'+home+'" required>
            <label for="'+home_id+'"><img src="/images/logos/'+home+'.png" style="float: left;" alt="'+home+' logo" />'+home+'</label>
            <span class="standings"></span>
            </div>
            </div>
            <div class="full location">
            <strong> '+day_of_game+' '+time+' MST on '+station+'</strong> <span class="mobile-hidden"> - </span> <br class="rwd-break">'+location+'
            </div></li>').appendTo('.matches');
        }

        // if a game has started, disable it's selection and do not make it required
        var now = new Date();
        if (now > timestamp) {
          $('input[type=radio]').removeAttr('required').attr('disabled', true);
        }
      }
    }
  }
});
}



// Get JSON for team records
// $.ajax({
//   dataType: 'json',
//   url: '/json/records.json',
//   success: function(data) {

//     for (i = 0; i < data.length; i++) {
//       var wins = data[i].wins;
//       var ties = data[i].ties;
//       var losses = data[i].losses;

//       var teamRecord = +away_id+(wins+ '-' +ties+ '-' +losses);
//       $('<div class="row marginless"><div class="half records">'+teamRecord+'</div></div>').appendTo('.standings');
//     }
//   }
// });
