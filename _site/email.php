<?php
if(isset($_POST['submit'])){
    $send_from = "max@maxquattromani.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $district = $_POST['district'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $address = $_POST['address'];
    $address2 = $_POST['address2'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $phone = $_POST['phone'];
    $subject = "Summer Superintendents Meeting";
    $message1 = "Dear " . $first_name . ",
    <br/><br/>
    Thank you for registering for the 2014 Summer Superintendents Meeting.
    <br/><br/>
    The event starts at 8:AM on June 24th, 2014 and will be held at Battle Mountain High School.
    <br/><br/>
    If you have any questions, please contact tiffany.myers@eagleschools.com.
    <br/><br/>
    Thank you and we'll see you there.
    <br/><br/>
    Dr. Jason Glass
    <br/><br/>
    <hr/>
    <br/>
    <strong>Event Details:</strong>
    <br/><br/>
    Eagle County Schools will bill your school district $40 to cover the costs of meeting meals during your attendance.
    <br/><br/>
    Please email Tiffany Myers at tiffany.myers@eagleschools.net to cancel your registration. No cancellations will be accepted after June 15, 2014.
    <br/><br/><br/>

    <address>
      <strong>Location:</strong>
      <br/><br/>
      <strong>Battle Mountain High School</strong><br>
      151 Miller Ranch Rd<br>
      Edwards, CO 81632
    </address>

    <br/><br/>

    <Strong>Directions:</strong>
      <br/><br/>
      Exit I-70 number 163 into Edwards,<br/><br/>
      RIGHT turn at bottom of off ramp if eastbound or LEFT if westbound, Gas Station/Convenience Store will be on your left.<br/><br/>
      Take a left out of the roundabout onto Miller Ranch Road, follow Miller Ranch Road to first round-about, the school will be on your LEFT.";

      $headers = "From: " . strip_tags($send_from) . "\r\n";
      $headers .= "Reply-To: ". "max@maxquattromani.com" . "\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    mail($from,$subject,$message1,$headers); // sends a copy of the message to the sender
    header("Location: /thank_you");

    // Create a timestamp for entries
    $timestamp = date('F j, Y, g:i a');
  }
  ?>
