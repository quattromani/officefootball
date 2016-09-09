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
          <td class="scores-team" data-team="'+visitor+'">
            <table>
              <tr>
                <td><img src="/images/logos/'+visitor+'.png" alt="'+visitor+'"></td>
                <td>'+visitor+'</td>
                <td class="score">'+visitorScore+'</td>
              </tr>
            </table>
          </td>
          <td data-team="'+home+'">
            <table>
              <tr>
                <td class="score">'+homeScore+'</td>
                <td>'+home+'</td>
                <td><img src="/images/logos/'+home+'.png" alt="'+home+'"></td>
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
