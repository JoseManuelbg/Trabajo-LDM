document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // hace que el formulario no se envíe del tirón
        swal({
            title: "¡Inscripción Enviada!",
            text: "Se ha enviado la inscripción correctamente",
            icon: "success",
            timer: 2000,
            buttons: false,
        });
        
        setTimeout(() => { // retrasa el envío del formulario 2 segundos (el tiempo necesario para leer la alerta)
            formulario.submit();
        }, 2000);
    });
});