document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // hace que el formulario no se envíe del tirón
        console.log(validaFormulario());
        if (validaFormulario()) {
            swal({
                title: "¡Sesión Inciada!",
                text: "Se ha iniciado sesión correctamente",
                icon: "success",
                timer: 2000,
                buttons: false,
            });
    
            setTimeout(() => { // retrasa el envío del formulario 2 segundos (el tiempo necesario para leer la alerta)
            
                formulario.submit();
                
                
            }, 2000);
            
        }
        
    });
});

//VALIDACION FORMULARIO
function validaFormulario() {
    //Acceder a los datos
    
    const email = document.getElementById("email").value; 
    const contrasena = document.getElementById("contrasena").value;
    
    //Almacenar los errores en un array
    let errores = [];
    
    //Mostrar errores
    //1º Email
    if (email === "") {
        errores.push("Por favor, introduzca su correo electrónico.")
    }
    else{
        let expresionEMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!expresionEMail.test(email)) {
            errores.push("Por favor, introduzca una dirección de correo válida.")
        }
        
    }
    /*
            NOMBRE DE USUARIO | @ | DOMINIO DE CORREO .cTLD
    
            a-z Controlo minusculas
            A-Z Controlo mayusculas
            0-9 Controlo numeros
            .-controlo especiales (. _ y -)
            + Indico que uno o + caracteres anteriores puedes aparecer de forma consecutiva
            \. Me indica que debe aparecer un punto.
    */ 
    
    //2º Contraseña
    if(contrasena.length < 8){
        errores.push("La contraseña debe tener al menos 8 caracteres.")
    }
    else{
        let expresionContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#-])[A-Za-z\d@$!%*?&#-]{8,}$/;
        if(!expresionContrasena.test(contrasena)){
            errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un carácter especial.")
        }
    }
    
    /*
        CONTRASEÑA
        (?=.*[a-z]) Debe tener al menos una letra minúscula
        (?=.*[A-Z]) Debe tener al menos una letra mayúscula
        (?=.*[0-9]) Debe tener al menos un número
        (?=.*[@$!%*?&#-]) Debe tener al menos un caracter especial 
        \d Regula que haya al menos un numero, es equivalente al rango 0-9
        [A-Za-z\d@$!%*?&]{8,} La contraseña debe estar compuesta al menos por 8 caracteres, que incluyan letras min y may, numeros y caracteres especiales que se especifican
    
    */
    
    
    //Comprobar si hay errores almacenados en el array
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }
    
    return true;
    
    //REPRESENTAR LOS ERRORES MEDIANTE FUNCION
    function mostrarErrores(errores){
    
        let divErrores = document.getElementById("errores");
        divErrores.innerHTML="";
        divErrores.style.display = "block";
    
        let ul = document.createElement("ul"); //Se ponen los errores en una lista desordenada
    
        errores.forEach(function(error) {
    
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
            
        });
        divErrores.appendChild(ul);
    }
    
}