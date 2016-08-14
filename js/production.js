var smallBreakPoint = 640;
var mediumBreakPoint = 768;
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

// Get JSON for Leaderboard
$.ajax({
  dataType: 'json',
  url: '/json/leaderboard.json',
  success: function(data) {

    var rank = 0;
    var rankGames = 0;
    var counter = 1;

    // Get the number of players in the pool
    var playerCount = data.length;
    $('<span>'+playerCount+'</span>').appendTo('.player-count');

    // Set the end of season pool total
    var seasonPot = '$515';
    $('<span>'+seasonPot+' USD</span>').appendTo('.season-pot');

    var tr;
    data.sort(function(a,b) { return parseFloat(b.total) - parseFloat(a.total) } );

    for (i = 0; i < data.length; i++) {

      var gamesWon = data[i].total;

      if (rankGames != gamesWon) {
        var rank = counter;
        var rankGames = gamesWon;
      } else if (rankGames == gamesWon) {
        var rank = rank;
      }

      if (i == 0) {
        var divisor = (100 / gamesWon);
      }

      var tdWidth = ((gamesWon / gamesTotal) *100).toFixed(2) + "%";
      var winPct = (gamesWon * divisor).toFixed(2) + "%";

      tr = $('<tr/>');
      tr.append('<td style="width: ' + winPct +'"><span class="rank">' + rank + '</span><span class="player">' + data[i].player + '</span><span class="total right" data-total="' + data[i].total + '" data-pct="' + tdWidth + '"></span></td>');
      $('#leaderboard').append(tr);

      counter++;
    }
  }
});

/* ==========================================================================
    Main -- Version: 0.4.0 - Updated: 2/20/2014
    ========================================================================== */

// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});

// Set year
(function($) {

  $.fn.getYear = function() {
    var d = new Date();
    var x = document.getElementById("year");
    x.innerHTML=d.getFullYear();
  }

}(jQuery));

$('.getYear').getYear();


// $.getJSON('/json/nfl2015.min.json', function(data) {
//   console.log(data);
// });

$.ajax({
  dataType: 'json',
  url: '/json/nfl2015.min.json',
  type: 'get',
  cache: false,
  success: function(data) {
    $(data.weeks).each(function(index, value) {

    });
  }
});

var week1 = new Date('9/10/2015');
var week2 = new Date('9/17/2015');
var week3 = new Date('9/24/2015');
var week4 = new Date('10/1/2015');
var week5 = new Date('10/8/2015');
var week6 = new Date('10/15/2015');
var week7 = new Date('10/22/2015');
var week8 = new Date('10/29/2015');
var week9 = new Date('11/5/2015');
var week10 = new Date('11/12/2015');
var week11 = new Date('11/19/2015');
var week12 = new Date('11/26/2015');
var week13 = new Date('12/3/2015');
var week14 = new Date('12/10/2015');
var week15 = new Date('12/17/2015');
var week16 = new Date('12/24/2015');
var week17 = new Date('12/31/2015');
var week18 = new Date('1/7/2016');

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

// Get JSON for schedule
$.ajax({
  dataType: 'json',
  url: '/json/nfl2015.min.json',
  type: 'get',
  cache: false,
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

$.getJSON('https://spreadsheets.google.com/feeds/list/1a3tvBpNte0cWmObkvd7j3wJdADyRvtYHW1IbHefPxX4/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var home = data.feed.entry[i]['gsx$hnn']['$t'];
    var homeScore = data.feed.entry[i]['gsx$hs']['$t'];
    var visitor = data.feed.entry[i]['gsx$vnn']['$t'];
    var visitorScore = data.feed.entry[i]['gsx$vs']['$t'];

    var result = Math.max(homeScore,visitorScore);
    if(result >= 0) {
      $(result).parent().addClass('yourClass');
    };

    $('.scores').append('
      <table>
      <tr>
        <td colspan="1"><img src="/images/logos/'+visitor+'.png" height="30" width="30" style="float: left;" alt="'+visitor+'" /></td>
        <td colspan="3">'+visitor+'</td>
        <td colspan="1" class="right">'+visitorScore+'</td>
      </tr>
      <tr>
        <td colspan="1"><img src="/images/logos/'+home+'.png" height="30" width="30" style="float: left;" alt="'+home+'" /></td>
        <td colspan="3">'+home+'</td>
        <td colspan="1" class="right">'+homeScore+'</td>
      </tr>
      </table>
      ');
  }

  var timestamp = new Date(data.feed.entry[0]['updated']['$t']);

  $('.updated').append('<div class="text-center"><span>Updated: ' + timestamp + '</span></div>');

});