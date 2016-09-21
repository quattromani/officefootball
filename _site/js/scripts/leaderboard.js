// Get JSON for Season Leaderboard
$.ajax({
  dataType: 'json',
  url: '/json/season-leaderboard.json',
  success: function(data) {

    var rank = 0;
    var rankGames = 0;
    var counter = 1;

    var tr;
    data.sort(function(a,b) { return parseFloat(b.total) - parseFloat(a.total) } );

    for (i = 0; i < data.length; i++) {

      var gamesWon = data[i].total;
      var gamesLost = (gamesTotal - gamesWon);
      console.log(gamesLost);

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
      tr.append('<td style="width: ' + winPct +'"><span class="rank">' + rank + '</span><span class="player">' + data[i].player + '</span><span class="total right" data-record="' + gamesWon + ' - ' + gamesLost + '" data-pct="' + tdWidth + '"></span></td>');
      $('#season-leaderboard').append(tr);

      counter++;
    }
  }
});

// Get JSON for Weekly Leaderboard
$.ajax({
  dataType: 'json',
  url: '/json/weekly-leaderboard.json',
  success: function(data) {

    var rank = 0;
    var rankGames = 0;
    var counter = 1;

    var tr;
    data.sort(function(a,b) { return parseFloat(b.total) - parseFloat(a.total) } );

    $('<span class="text-center week-nav"> Week '+parseFloat(week + 1)+' Leaders</span>').appendTo('.weekly-total');

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
      $('#weekly-leaderboard').append(tr);

      counter++;
    }
  }
});
