<?php
    $destino= "zusarq@gmail.com";
    $nombre= $_POST["nombre"];
    $correo= $_POST["correo"];
    $telefono= $_POST["telefono"];
    $mensaje= $_POST["mensaje"];
    $contenido="nombre: " . $nombre . "\nCorreo: " .$correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,"Contacto", $contenido);
    header("location:gracias.html");
?>