 <?php
    $content=file_get_contents("http://www.fantasyfootballnerd.com/service/schedule/json/ci96cfatdg5k/");  // add your url which contains json file
    $json = json_decode($content, true);
   // print_R($json);
    $count=count($json);
    echo'<table><th>Tutorial</th><th>Link</th>';
    for($i=0;$i<$count;$i++)
    {
      echo'<tr><td>'.$json[$i]['tutorial'].'</td><td>'.$json[$i]['url'].'</td></tr>';
    }
   echo'</table>';
  ?>
