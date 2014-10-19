$.getJSON('https://spreadsheets.google.com/feeds/list/1a3tvBpNte0cWmObkvd7j3wJdADyRvtYHW1IbHefPxX4/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var home = data.feed.entry[i]['gsx$hnn']['$t'];
    var homeScore = data.feed.entry[i]['gsx$hs']['$t'];
    var visitor = data.feed.entry[i]['gsx$vnn']['$t'];
    var visitorScore = data.feed.entry[i]['gsx$vs']['$t'];

    var result = Math.max(homeScore,visitorScore);
    if(result > 0) {
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
