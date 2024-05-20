
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
        const dni = document.getElementById("dni").value;
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const opcion = formulario.querySelectorAll("#opcion");

        
        let errores = [];

        // 1ª Nombre
        if (nombre === "") {
            errores.push("Por favor, ingresa tu nombre");
        }
        // 2ª Apellido
        if (apellido === "") {
            errores.push("Por favor, ingresa tu apellido");
        }
        // 3ª DNI
        if(dni === ""){
            errores.push("Ingrese su DNI");
        }else{
            let expresionDni = /(\d{8})([-]?)([A-Z]{1})/;
            if (!expresionDni.test(dni)) {
                    errores.push("Por favor, ingrese un DNI válido");
                }
            }
        // 4ª
        if (!esMayorDe16Años(fechaNacimiento)) {
            errores.push("Debes ser mayor de 16 años para inscribirte.");
        }

        // 5ª Email
        if (email === "") {
            errores.push("Por favor, ingresa tu correo electrónico");
        } else {
            let expresionMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!expresionMail.test(email)) {
                errores.push("Por favor, ingrese una dirección de correo válida.");
            }
        }
        // 6ª Teléfono
        if (telefono !== "") {
            let expresion = /^\d{9}$/;
            if (!expresion.test(telefono)) {
                errores.push("El teléfono tiene que tener 9 dígitos");
            }
        } else {
            errores.push("Por favor, ingresa un número de teléfono");
        }

        //7ª Opcion 
        let alMenosUnoMarcado = false;
        opcion.forEach(function(opcion) {
            if (opcion.checked) {
                alMenosUnoMarcado = true;
            }
        });

        if (!alMenosUnoMarcado) {
            errores.push("Debes seleccionar al menos un módulo.");
        }

        if (errores.length > 0) {
            mostrarErrores(errores);
            return false;
        }
        return true;
    }
    function esMayorDe16Años(fechaNacimiento) {
        if (!fechaNacimiento) return false; // Si no hay fecha ingresada

        const hoy = new Date();
        const fechaNacimientoDate = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

        // Si el mes actual es menor que el mes de nacimiento, no ha cumplido años aún
        // O si es el mismo mes, pero el día actual es menor que el día de nacimiento
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }

        return edad >= 16;
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

