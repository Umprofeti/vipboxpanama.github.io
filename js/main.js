 
window.addEventListener('load', function(){
    //Scroll elementos Menu 
    $('#a0').click(function(e){
        $('html, body').animate({
            scrollTop: 530
        }, 1000)
    })
   $('#a1').on('click', function(e){
       $('html, body').animate({
        scrollTop: 2300
       }, 1000)
   });
   $('#a2').on('click', function(e){
       $('html, body').animate({
        scrollTop: 2800
       },1000)
   });
   $('#a3').on('click', function(e){
       $('html, body').animate({
        scrollTop: 3530
       },1000)
   });
   

    $('#a5').on('click', function(e){
        $('html, body').animate({
            scrollTop: 530 
        }, 1000)
    });

    $('#a6').on('click', function(e){
        $('html, body').animate({
            scrollTop: 1890
           }, 1000)
    });

    $('#a7').on('click', function(e){
        $('html, body').animate({
            scrollTop: 4300
           },1000)
    });
    $('#a8').on('click', function(e){
        $('html, body').animate({
            scrollTop: 5790
           },1000)
    });

    

   //barra desplegable para dispositivos moviles.
    $(document).ready(function(){
        $('.sidenav').sidenav();
    });

    // Efecto Parallax
    $(document).ready(function(){
        $('.parallax').parallax();
      });

   // validacion de formulario y envio de formulario.

   var formulario = document.querySelector("#formulario");
   var nombre = document.querySelector("#nombre");
   var apellido = document.querySelector("#apellido");
   var telefono = document.querySelector("#telefono");
   var email = document.querySelector("#email");
   var detalles_pedido = document.querySelector("#detalles_pedido");
   var alerta1 = document.getElementById('alerta1');
   var alerta2 = document.getElementById('alerta2'); 
   var alerta3 = document.getElementById('alerta3');
   var alerta4 = document.getElementById('alerta4');
   var alerta5 = document.getElementById('alerta5');
   var alerta6 = document.getElementById('alerta6');
   var alerta7 = document.getElementById('alerta7');
   var alerta8 = document.getElementById('alerta8');
   var alerta9 = document.getElementById('alerta9');
   var alerta10 = document.getElementById('alerta10');
   
   //validar letras mayusculas
  nombre.addEventListener('keypress',function(){
       var capturar_letras = (event.which) ? event.which : event.keyCode;

       if (capturar_letras >= 65 &&  capturar_letras <= 90 || capturar_letras >= 97  &&  capturar_letras <= 122 || capturar_letras === 243 || capturar_letras === 237 || capturar_letras === 233 || capturar_letras === 255) {
           alerta1.innerHTML = ``;
       }else{
            alerta1.innerHTML = `<div class="alert alert-warning" role="alert">
            Por favor utilizar solo letras.
            </div>`;
       }

   });

   apellido.addEventListener('keypress',function(){
       var capturar_letras = (event.which) ? event.which : event.keyCode;

       if (capturar_letras >= 65 &&  capturar_letras <= 90 || capturar_letras >= 97  &&  capturar_letras <= 122 || capturar_letras === 243 || capturar_letras === 237 || capturar_letras === 233 || capturar_letras === 255) {
        alerta2.innerHTML = ``;
       }else{
        alerta2.innerHTML = `<div class="alert alert-warning" role="alert">
        Por favor utilizar solo Letras.
        </div>`;
       }

   });
   telefono.addEventListener('keypress',function(){
       var capturar_numeros = (event.which) ? event.which : event.keyCode;

       if (capturar_numeros >= 48 &&  capturar_numeros <= 57) {
        alerta3.innerHTML = ``;
       }else{
        alerta3.innerHTML = `<div class="alert alert-warning" role="alert">
        Por favor utilizar solo Numeros.
        </div>`;
       }

   });

   email.addEventListener('keypress',function(){
       var capturar_correo = (event.which) ? event.which : event.keyCode;

       if (capturar_correo >= 97 &&  capturar_correo <= 122 || capturar_correo == 64 || capturar_correo == 46 || capturar_correo >= 48 &&  capturar_correo <= 57) {
        alerta4.innerHTML = ``;
       }else{
        alerta4.innerHTML = `<div class="alert alert-warning" role="alert">
        Email Incorrecto
        </div>`;
       }

   });

  detalles_pedido.addEventListener('keypress',function(){
       var capturar_detalles = (event.which) ? event.which : event.keyCode;

       if (capturar_detalles >= 65 &&  capturar_detalles <= 90 || capturar_detalles >= 97  &&  capturar_detalles <= 122 || capturar_detalles === 243 || capturar_detalles === 237 || capturar_detalles === 233 || capturar_detalles === 255) {
        alerta5.innerHTML = ``;
       }else{
        alerta5.innerHTML = `<div class="alert alert-warning" role="alert">
        Por favor utilizar solo Letras.
        </div>`;
       }

   }); 

   formulario.addEventListener('submit', function(e){
       e.preventDefault();

       if ( nombre.value.trim() === null || nombre.value.trim().length === 0 || apellido.value.trim() === null || apellido.value.trim().length === 0 ||  telefono.value.trim() === null || telefono.value.trim().length === 0 || email.value.trim() === null || email.value.trim().length === 0 ) {
        alerta6.innerHTML = `<div class="alert alert-danger" role="alert">
                Llena todos los campos correctamente.
            </div>`;
       }else{
        alerta6.innerHTML = `<div class="alert alert-success" role="alert">
            Informacion enviada correctamente, se le estará contactando en las próximas horas.
            </div>`;

         // enviar datos 
       var enviar_datos = new FormData(formulario);

       fetch('../php/recibe.php', {
           method: 'POST',
           body: enviar_datos
       })
            .then(res => res.json())
            .then(data => {
                if(data === 'error'){
                    alerta10.innerHTML = `<div class="alert alert-danger" role="alert">
                    LLena los campos correctamente 
                    </div>`;
                }else{
                    alerta10.innerHTML = `<div class="alert alert-success" role="alert">
                    Datos enviados correctamente 
                    </div>`;
                }
            });     
       }
   });


    //Acordion 
    
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });
});