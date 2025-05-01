<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $email = $_POST['email'];
    $query = $_POST['query'];

    $to = "ashishkumarswami@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "Name: $name\n";
    $message .= "Contact No.: $contact\n";
    $message .= "Email: $email\n";
    $message .= "Query: $query\n";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "There was an error sending your message. Please try again.";
    }
}
?>
