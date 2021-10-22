<?php
    $to      = 'ali.obba.chantier@gmail.com';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: ali.obba.chantier@gmail.com'       . "\r\n" .
                 'Reply-To: ali.obba.chantier@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>