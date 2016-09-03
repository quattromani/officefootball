 $.getJSON('http://www.nfl.com/liveupdate/scorestrip/ss.json', function(data) {

  for (i = 0; i < data.gms.length; i++) {
    var home = data.gms[i].h;
    var homeScore = data.gms[i].hs;
    var visitor = data.gms[i].v;
    var visitorScore = data.gms[i].vs;

    var result = Math.max(homeScore,visitorScore);
    if(result >= 0) {
      $(result).parent().addClass('yourClass');
    };

    $('.scores').append('
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td data-team="'+visitor+'">
            <table>
              <tr>
                <td colspan="1.5"><img src="/images/logos/'+visitor+'.png" alt="'+visitor+'" /></td>
                <td colspan="2">'+visitor+'</td>
                <td colspan="1" class="score">'+visitorScore+'</td>
              </tr>
            </table>
          </td>
          <td data-team="'+home+'">
            <table>
              <tr>
                <td colspan="1.5" class="score">'+homeScore+'</td>
                <td colspan="2">'+home+'</td>
                <td colspan="1"><img src="/images/logos/'+home+'.png" alt="'+home+'" /></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      ');
  }

  var week = data.w;

  $('.scoreboard h1').append('<div class="text-center"><span>Week '+week+' Scores</span></div>');

});
