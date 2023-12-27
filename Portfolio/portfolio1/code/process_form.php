<?php
ini_set("SMTP", "localhost");
ini_set("smtp_port", "25");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $number = htmlspecialchars($_POST["number"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Set up email parameters
    $to = "gvanceladze.guga1@gmai.com"; // Replace with your email address
    $email_subject = "New Contact Form Submission: $subject";
    $headers = "From: $email";

    // Compose the email message
    $email_message = "name: $name\n";
    $email_message .= "mail: $email\n";
    $email_message .= "number: $number\n\n";
    $email_message .= "message:\n$message";

    // Send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // Redirect users who try to access this script directly
    header("Location: main.html");
    exit();
}
?>
