<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name=strip_tags($_POST['name']);
$email=strip_tags($_POST['email']);
$selected_value=$_POST['radio'];
$enquiry=strip_tags($_POST['enquiry']);



// validation

if (empty($name)){
    header('location:index.html?error=name');
    exit();
}

if (empty($email)){
    header('location:index.html?error=email');
    exit();
}

if (empty($enquiry)){
    header('location:index.html?error=enquiry');
    exit();
}

// radio buttons value

if(isset($_POST['submit'])) {
    $selected_value=$_POST['radio'];
}


// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.outlook.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'seym1978@hotmail.co.uk';                     // SMTP username
    $mail->Password   = 'sveta1978';                               // SMTP password
    $mail->SMTPSecure = 'STARTTLS';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('seym1978@hotmail.co.uk', 'Mailer');
    $mail->addAddress('svet.crow@gmail.com');     // Add a recipient
   

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Website enquiry from' . $name;
    
    $body="
        Dear Admin, you've received an enquiry from $name<br />
        The enquiry is as follows:<br />
        Name: $name<br/>
        email: $email<br/>
        Value: $selected_value<br/><br/>
        Enquiry: $enquiry
    ";
        
        
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}