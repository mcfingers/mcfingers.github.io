<?php
require_once('vendor/autoload.php');

function run($message)
{
    try {
        $mailchimp = new MailchimpTransactional\ApiClient();
        $mailchimp->setApiKey('8HBbiQiVhAGZUbCr-tocZQ');

        $response = $mailchimp->messages->send(["message" => $message]);
        print_r($response);
    } catch (Error $e) {
        echo 'Error: ', $e->getMessage(), "\n";
    }
}

$message = [
    "from_email" => "noreply@cmseventos.com",
    "subject" => "Hello world",
    "text" => "Welcome to Mailchimp Transactional!",
    "to" => [
        [
            "email" => "mcfingers@gmail.com",
            "type" => "to"
        ]
    ]
];
run($message);