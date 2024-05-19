document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // hace que el formulario no se envíe del tirón
        if (validaFormulario()) {
            swal({
                title: "¡Mensaje Enviado!",
                text: "Se ha enviado el mensaje correctamente, en breves te responderemos por email",
                icon: "success",
                timer: 2000,
                buttons: false,
            });

            setTimeout(() => { // retrasa el envío del formulario 2 segundos (el tiempo necesario para leer la alerta)
                formulario.submit();
            }, 2000);
        }



    });

    function validaFormulario() {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const asunto = document.getElementById("asunto").value;
        const mensaje = document.getElementById("mensaje").value;

        //Arrays para almacenar los errores.

        let errores = [];

        //Mostrar errores
        //1ª Nombre
        if (nombre === "") {
            errores.push("Por favor, ingresa tu nombre");
        }
        //2ª Apellido
        if (apellido === "") {
            errores.push("Por favor, ingresa tu apellido");
        }
        //3ª Email
        if (email === "") {
            errores.push("Por favor, ingresa tu correo electronico")
        } else {
            let expresionMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!expresionMail.test(email)) {
                errores.push("Por favor, ingrese una direccion de correo válida.");
            }
        }

        //4ª Telefono
        if (telefono !== "") {
            let expresion = /^\d{9}$/;
            if (!expresion.test(telefono)) {
                errores.push("El telefono tiene que tener 9 Digitos");

            }
        }
        else {
            errores.push("Por favor, ingresa un numero de teléfono");
        }

        //5º Asunto
        if (asunto === "") {
            errores.push("Por favor, ingresa el asunto de tu mensaje");
        } else if (asunto.length > 50) {
            errores.push("El asunto no puede tener más de 50 caracteres")
        }

        //6º Mensaje
        if (mensaje === "") {
            errores.push("Por favor, ingresa tu mensaje");
        } else if (mensaje.length < 50) {
            errores.push("El mensaje debe tener 50 caracteres como mínimo")
        }

        if (errores.length > 0) {
            mostrarErrores(errores);
            return false;
           
        }           
        return true;


    }
    function mostrarErrores(errores) {

        let divErrores = document.getElementById("errores");
        divErrores.innerHTML = ""; //servia para limpiar, para representar lo errores del formulario.
        divErrores.style.display = "block";

        let ul = document.createElement("ul");
        //aqui se van a poner, los errores en una lista desordenada

        errores.forEach(function (error) {

            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);

        });
        divErrores.appendChild(ul);

    }
});

















