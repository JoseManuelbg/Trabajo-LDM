/*document.addEventListener("DOMContentLoaded", function () {
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
    function validaFormulario() {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
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

        //3ª DNI


        //4ª Email
        if (email === "") {
            errores.push("Por favor, ingresa tu correo electronico")
        } else {
            let expresionMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!expresionMail.test(email)) {
                errores.push("Por favor, ingrese una direccion de correo válida.");
            }
        }

        //5ª Telefono
        if (telefono !== "") {
            let expresion = /^\d{9}$/;
            if (!expresion.test(telefono)) {
                errores.push("El telefono tiene que tener 9 Digitos");

            }
        }
        else {
            errores.push("Por favor, ingresa un numero de teléfono");
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


});*/

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // hace que el formulario no se envíe del tirón

        // Llamar a la función de validación
        if (validaFormulario()) {
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
        }
    });

    function validaFormulario() {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;

        let errores = [];

        // 1ª Nombre
        if (nombre === "") {
            errores.push("Por favor, ingresa tu nombre");
        }
        // 2ª Apellido
        if (apellido === "") {
            errores.push("Por favor, ingresa tu apellido");
        }
        // 4ª Email
        if (email === "") {
            errores.push("Por favor, ingresa tu correo electrónico");
        } else {
            let expresionMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!expresionMail.test(email)) {
                errores.push("Por favor, ingrese una dirección de correo válida.");
            }
        }
        // 5ª Teléfono
        if (telefono !== "") {
            let expresion = /^\d{9}$/;
            if (!expresion.test(telefono)) {
                errores.push("El teléfono tiene que tener 9 dígitos");
            }
        } else {
            errores.push("Por favor, ingresa un número de teléfono");
        }

        if (errores.length > 0) {
            mostrarErrores(errores);
            return false;
        }
        return true;
    }

    function mostrarErrores(errores) {
        let divErrores = document.getElementById("errores");
        divErrores.innerHTML = ""; // limpia los errores previos
        divErrores.style.display = "block";

        let ul = document.createElement("ul");
        errores.forEach(function (error) {
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        });
        divErrores.appendChild(ul);
    }
});

