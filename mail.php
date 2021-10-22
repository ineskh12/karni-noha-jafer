<?php
    $to      = 'nobody@example.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: ali.obba.chantier@gmail.comm'       . "\r\n" .
                 'Reply-To: ali.obba.chantier@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>