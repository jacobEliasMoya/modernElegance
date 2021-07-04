<?php
    //first PHP program :)
    if(isset($_POST['submit'])){
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "jmoya@jacobmoya.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have receieved an e-mail from ".$name.".\n\n".$message; 

        // function declaration (3 necessary perameters)
        //email sent to, 
        //subject
        //message
        mail($mailTo,$subject,$txt,$headers);
        header("Location: index.html?messageSent!");
    }
?>