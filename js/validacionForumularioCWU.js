function validaFormulario(){

    //ACCEDER A LOS DATOS

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    /*const email = document.getElementById("email").value;*/
    const telefono = document.getElementById("telefono").value;

    
    let errores = [];


    //Validaciones 

    //1º nombre

    if (nombre === "") {
        errores.push("Por Favor ingrese su nombre");
    };

    //2º Contraseña

    if (apellido === "") {
        errores.push("Por favor, ingrese su apellido");
    };

    //3º Telefono

    if (telefono!=="") {

        let expresion = /^\d{9}$/;
        if (!expresion.test(telefono)) {

            errores.push("El telefono debe tener minimo nueve digitos");
        }
    }else{
        errores.push("El telefono debe tener minimo nueve digitos");
    }

    //Mostrar Errores

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;
};

function mostrarErrores(errores){

    let divErrores= document.getElementById("errores");
    divErrores.innerHTML="";
    divErrores.style.display="block"; 

    let ul=document.createElement("ul");

    errores.forEach(function(error) {

        let li = document.createElement("li");
        li.textContent=error;
        ul.appendChild(li);

    });
    divErrores.appendChild(ul);
};