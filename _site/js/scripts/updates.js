 $.getJSON('https://spreadsheets.google.com/feeds/list/1JCa8acwW8ATlbeaWugatJfM08aKehFcVQuShI8KRg7A/1/public/values?alt=json', function(data) {

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

  var timestamp = new Date(data.feed.entry[0]['updated']['$t']);

  $('.updated').append('<div class="text-center"><span>Updated: ' + timestamp + '</span></div>');

});


