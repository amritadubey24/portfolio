<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "Onnline";
$emailMessage = "Name: " . $name . "\r\n";
$emailMessage .= "Email: " . $email . "\r\n";
$emailMessage .= "Message: " . $message . "\r\n";

// Send the email
$to = "amrita.dubey@desklay.com";
// $to = "sales@desklay.com";
$headers = "From: noreply@desklay.com";



$mailSent = mail($to, $subject, $emailMessage, $headers);

if ($mailSent) {
    $response = [
        'status' => 'success',
        'message' => 'Your Inquiry Sent Successfully',
        'data' => [
            'name' => $name,
            'email' => $email,
            'message' => $message
        ]
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'Failed to send email'
    ];
}

header('Content-Type: application/json');
echo json_encode($response);

?>
