<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Define the recipient email address
    $to = "inq@pichub.co.uk";  // Replace with your email address

    // Set the email subject
    $subject = "New enquiry by contactus from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Display a success message or redirect to a thank you page
        echo "Thank you for your message. We will get back to you shortly.";
    } else {
        // Display an error message if the email couldn't be sent
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
}
?>
