$.ajax({
  type: "GET",
  url: "http://www.nfl.com/liveupdate/scorestrip/ss.json",
  dataType: "jsonp",
  success: function(data) {
    for (var i = 0; i < data.gms.length; i++) {
      document.write("Day: " + data.gms[i][0]);
      document.write("<br/>");
      document.write("Time: " + data.gms[i][1]);
      document.write("<br/><br/>");
    }
  }
});
