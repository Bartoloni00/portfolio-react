    <?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Dirección de correo electrónico a la que se enviará el mensaje
    $destinatario = 'bartoloniabraham@gmail.com';

    // Asunto del mensaje
    $asunto = 'Nuevo mensaje desde el portfolio';

    // Cuerpo del mensaje
    $cuerpo = "Nombre: " . $nombre . "\r\n";
    $cuerpo .= "Email: " . $email . "\r\n";
    $cuerpo .= "Mensaje: " . $mensaje . "\r\n";

    // Cabeceras del mensaje
    $cabeceras = "From: " . $email . "\r\n";
    $cabeceras .= "Reply-To: " . $email . "\r\n";

    // Enviar el mensaje
    mail($destinatario, $asunto, $cuerpo, $cabeceras);

    ?>