<?php
// simple php script, nothing to crazy, just to get the job done.
    if(isset($_POST['submit'])){
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];
        $subject = 'New Email from developing.jacobmoya.com!'
        $mailTo = "jmoya@jacobmoya.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have receieved an e-mail from ".$name.".\n\n".$message; 

        // function declaration (3 necessary perameters)
        //email sent to, 
        //subject
        //message
        mail($mailTo,$subject,$txt,$headers);
    }
?>