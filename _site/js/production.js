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


var week1 = new Date('9/8/2016');
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


var week1 = new Date('9/8/2016');
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
var week17 = new Date('12/29/2016');

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

var smallBreakPoint=640,mediumBreakPoint=768;$("#weekly").on("submit",function(){$('<fieldset><input type="hidden" name="Week" value="Week '+week_number+'"></fieldset>').appendTo(".hidden")}),$(function(){$("#email").change(function(){var a=$(this).val();$("#copy").val(a)})}),$.ajax({dataType:"json",url:"/json/leaderboard.json",success:function(a){var b=0,c=0,d=1,e=a.length;$("<span>"+e+"</span>").appendTo(".player-count");var f="$515";$("<span>"+f+" USD</span>").appendTo(".season-pot");var g;for(a.sort(function(a,b){return parseFloat(b.total)-parseFloat(a.total)}),i=0;i<a.length;i++){var h=a[i].total;if(c!=h)var b=d,c=h;else if(c==h)var b=b;if(0==i)var j=100/h;var k=(h/gamesTotal*100).toFixed(2)+"%",l=(h*j).toFixed(2)+"%";g=$("<tr/>"),g.append('<td style="width: '+l+'"><span class="rank">'+b+'</span><span class="player">'+a[i].player+'</span><span class="total right" data-total="'+a[i].total+'" data-pct="'+k+'"></span></td>'),$("#leaderboard").append(g),d++}}}),$(function(){$("li:first-child").addClass("js-first"),$("li:last-child").addClass("js-last")}),function(a){a.fn.getYear=function(){var a=new Date,b=document.getElementById("year");b.innerHTML=a.getFullYear()}}(jQuery),$(".getYear").getYear();var week1=new Date("9/8/2016"),week2=new Date("9/15/2016"),week3=new Date("9/22/2016"),week4=new Date("9/29/2016"),week5=new Date("10/6/2016"),week6=new Date("10/13/2016"),week7=new Date("10/20/2016"),week8=new Date("10/27/2016"),week9=new Date("11/3/2016"),week10=new Date("11/10/2016"),week11=new Date("11/17/2016"),week12=new Date("11/24/2016"),week13=new Date("12/1/2016"),week14=new Date("12/8/2016"),week15=new Date("12/15/2016"),week16=new Date("12/22/2016"),week17=new Date("12/29/2016"),today=new Date;if(week1>today)var week=0;if(today>=week1)var week=0;if(today>=week2)var week=1;if(today>=week3)var week=2;if(today>=week4)var week=3;if(today>=week5)var week=4;if(today>=week6)var week=5;if(today>=week7)var week=6;if(today>=week8)var week=7;if(today>=week9)var week=8;if(today>=week10)var week=9;if(today>=week11)var week=10;if(today>=week12)var week=11;if(today>=week13)var week=12;if(today>=week14)var week=13;if(today>=week15)var week=14;if(today>=week16)var week=15;if(today>=week17)var week=16;if(week18<=today)var week=17;var plus_one=1,week_number=week+plus_one,gamesTotal=207;$.ajax({dataType:"json",url:"/json/nfl2016.json",success:function(a){for($('<span class="text-center">Week '+week_number+"</span>").appendTo("h1"),$("#subject").val("Week "+week_number+" Picks"),i=0;i<a[week].game_days.length;i++)for(m=0;m<a[week].game_days[i].matches.length;m++){var b=a[week].game_days[i].matches[m].id,c=a[week].game_days[i].matches[m].stadium,d=a[week].game_days[i].matches[m].away.id,e=a[week].game_days[i].matches[m].home.id;Number.prototype.pad=function(a){return(new Array(a+1).join("0")+this).slice(-a)};var f=new Date(a[week].game_days[i].matches[m].timestamp),g=f.getHours()%12||12,h=f.getMinutes().pad(2),j=+g+":"+h,k=a[week].game_days[i].matches[m].away.nick,l=a[week].game_days[i].matches[m].home.nick,n=a[week].game_days[i].matches[m].timestamp.slice(0,3);"Mon"==n?$('<li>\n            <div class="row marginless">\n            <div class="teams">\n            <div class="half">\n            <input type="radio" class="radio" id="'+d+'" name="'+b+'" value="'+k+'" required>\n            <label for="'+d+'"><img src="images/logos/'+k+'.png" style="float: right;" alt="'+k+'" />'+k+'</label>\n            </div>\n            <div class="half">\n            <input type="radio" class="radio" id="'+e+'" name="'+b+'" value="'+l+'" required>\n            <label for="'+e+'"><img src="images/logos/'+l+'.png" style="float: left;" alt="'+l+'" />'+l+'</label>\n            </div>\n            </div>\n            <div class="full location">\n            <strong>'+c+"</strong> - "+j+' MST\n            </div>\n            <div class="full">\n            <label for="'+b+'" class="total_score">Game Total:</label>\n            <input type="text" class="total_score" id="'+b+'" name="'+b+'">\n            </div>\n            </div>\n            </li>').appendTo(".matches"):$('<li>\n            <div class="row marginless">\n            <div class="teams">\n            <div class="half">\n            <input type="radio" class="radio" id="'+d+'" name="'+b+'" value="'+k+'" required>\n            <label for="'+d+'"><img src="images/logos/'+k+'.png" style="float: right;" alt="'+k+'" />'+k+'</label>\n            </div>\n            <div class="half">\n            <input type="radio" class="radio" id="'+e+'" name="'+b+'" value="'+l+'" required>\n            <label for="'+e+'"><img src="images/logos/'+l+'.png" style="float: left;" alt="'+l+'" />'+l+'</label>\n            </div>\n            </div>\n            <div class="full location">\n            <strong>'+c+"</strong> - "+j+" MST\n            </div>\n            </div></li>").appendTo(".matches")}}}),$.getJSON("https://spreadsheets.google.com/feeds/list/1a3tvBpNte0cWmObkvd7j3wJdADyRvtYHW1IbHefPxX4/od6/public/values?alt=json",function(a){for(i=0;i<a.feed.entry.length;i++){var b=a.feed.entry[i].gsx$hnn.$t,c=a.feed.entry[i].gsx$hs.$t,d=a.feed.entry[i].gsx$vnn.$t,e=a.feed.entry[i].gsx$vs.$t,f=Math.max(c,e);f>=0&&$(f).parent().addClass("yourClass"),$(".scores").append('\n      <table>\n      <tr>\n        <td colspan="1"><img src="/images/logos/'+d+'.png" height="30" width="30" style="float: left;" alt="'+d+'" /></td>\n        <td colspan="3">'+d+'</td>\n        <td colspan="1" class="right">'+e+'</td>\n      </tr>\n      <tr>\n        <td colspan="1"><img src="/images/logos/'+b+'.png" height="30" width="30" style="float: left;" alt="'+b+'" /></td>\n        <td colspan="3">'+b+'</td>\n        <td colspan="1" class="right">'+c+"</td>\n      </tr>\n      </table>\n      ")}var g=new Date(a.feed.entry[0].updated.$t);$(".updated").append('<div class="text-center"><span>Updated: '+g+"</span></div>")});
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
