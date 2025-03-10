<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "toomas-kaarel.elmet@voco.ee";
    $subject = "E-portfolio Contact Form Submission";
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);
    header("Location: index.html#contact");
    exit();
}
?>
