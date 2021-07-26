<?php 
//Variables

    $usuario = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = (int)$_POST['telefono'];
    $email = $_POST['email'];
    $link_pedido = $_POST['link_pedido'];
    $detalles_pedido = $_POST['detalles_pedido'];

    if(!empty($usuario) || !empty($apellido) || !empty($telefono) || !empty($email)){
        //Validar Nombre
        if(!is_string($nombre) || !preg_match('[A-Za-zñáéóí]+', $nombre)){
            echo json_encode('error');
        }
        //Validar Apellido
        if(!is_string($apellido) || !preg_match('[A-Za-zñáéóí]+', $apellido)){
            echo json_encode('error');
        }
        //validar Telefono
        if(!is_int($telefono) || !filter_var($telefono, FILTER_VALIDATE_INT)){
            echo json_encode('error');
        }
        if(!is_string($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo json_encode('error');
        }
    }else{
        $correo = 'info@vipboxpanama.com';
        $asunto =  "Formulario";
        $mensaje = "Nombre: $usuario\n";
        $mensaje .= "Apellido: $apellido\n";
        $mensaje .= "Telefono: $telefono\n";
        $mensaje .= "Email: $email.\n";
        $mensaje .= "Link del pedido: $link_pedido\n";
        $mensaje .= "Detalles del pedido: $detalles_pedido\n";

        mail($correo, $asunto, $mensaje);
    }

    