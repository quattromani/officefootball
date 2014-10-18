$.getJSON('https://spreadsheets.google.com/feeds/list/1a3tvBpNte0cWmObkvd7j3wJdADyRvtYHW1IbHefPxX4/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var home = data.feed.entry[i]['gsx$hnn']['$t'];
    var homeScore = data.feed.entry[i]['gsx$hs']['$t'];
    var visitor = data.feed.entry[i]['gsx$vnn']['$t'];
    var visitorScore = data.feed.entry[i]['gsx$vs']['$t'];

    $('.scores').append('
      <div class="row">
      <div class="half score">
       <span class="text-left">'+visitor+'</span>
       <span class="text-right score">'+visitorScore+'</span>
       <br>
       <span class="text-right">'+home+'</span>
       <span class="text-left score">'+homeScore+'</span>
      </div>
      </div>
      ');
  }

  // var timestamp = new Date(data.feed.entry[0]['updated']['$t'].timestamp);
  // var hours = timestamp.getHours() % 12 || 12;
  // var minutes = timestamp.getMinutes().pad(2);
  // var time = +hours+ ':' +minutes;
  // $('.scores').append('<span>Scores Updated: ' + time + '</span>');

});
