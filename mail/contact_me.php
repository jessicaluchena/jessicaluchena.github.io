<?php
    $mensaje = "Nombre: {$_POST['name']} \r\n Email: {$_POST['email']} \r\n Phone: {$_POST['phone']} \r\n\r\n {$_POST['message']}";
    $mensaje = wordwrap($mensaje, 70, "\r\n");
    mail('jessicaluchena@gmail.com', 'Contacto Portfolio', $mensaje);
?>