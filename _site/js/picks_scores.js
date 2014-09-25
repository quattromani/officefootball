// Get JSON for schedule
$.ajax({
  dataType: 'json',
  url: '/json/test.json',
  success: function(data) {
    for (i = 0; i < data.gms.length; i++) {

      var away_scores = data.gms[i].vnn;

      var visitor_score = data.gms[i].vs;
      var home_score = data.gms[i].hs;
      var period = data.gms[i].q;

      // Make 'q' a little bit more readable
      if (period == 'F') {
        var period = 'Final';
      } else if (period == '4') {
        var period = '4th Qtr'
      } else if (period == '3') {
        var period = '3rd Qtr'
      } else if (period == '2') {
        var period = '2nd Qtr'
      } else if (period == '1') {
        var period = '1st Qtr'
      } else if (period == 'P') {
        var period = 'Pre-Game'
      }

      $('<div class="scores">
        <div class="half">
        '+visitor_score+'
        </div>
        <div class="half">
        '+home_score+'
        </div>
        </div>
        <div class="period">
          <div class="full">
          '+period+'
          </div>
        </div>').appendTo('.teams');
    }
  }
});
