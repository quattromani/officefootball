// Get JSON for Leaderboard
$.ajax({
  dataType: 'json',
  url: '/json/leaderboard.json',
  success: function(data) {

    // Get the number of players in the pool
    var playerCount = data.length;
    $('<span>'+playerCount+'</span>').appendTo('.player-count');

    // Set the end of season pool total
    var seasonPot = "$105"
    $('<span>'+seasonPot+' USD</span>').appendTo('.season-pot');

    var tr;
    data.sort(function(a,b) { return parseFloat(b.total) - parseFloat(a.total) } );

    for (var i = 0; i < data.length; i++) {
      var gamesWon = data[i].total;

      var tdWidth = ((gamesWon / gamesTotal) *100).toFixed(2) + "%";

      tr = $('<tr/>');
      tr.append('<td style="width: ' + tdWidth +'"><span class="player left">' + data[i].player + '</span><span class="total right" data-total="' + data[i].total + '" data-pct="' + tdWidth + '"></span></td>');
      $('table').append(tr);
    }
  }
});
