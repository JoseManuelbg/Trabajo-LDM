function validaFormulario() { //Acceder a los datos

    const nombre = document.getElementById("ruser").value;

    const apellido = document.getElementById("rapellido").value;

    const email = document.getElementById("remail").value; 

    const telefono = document.getElementById("rtelefono").value;

        let errores = [];

//1º Validación nombre: 
    if (nombre === ""){
        errores.push("Por favor, ingrese su  nombre.")
    }
    
//2º Validación apellido 
    if (apellido === ""){
        errores.push("Por favor, ingrese sus apellidos ")
    }

//3º Validación Telefono   
    if (telefono !=="") {
        let expresion = / ^\d{9}$/;
        if (!expresion.test(telefono)) {
            errores.push("El telefono tiene que tener 9 Digitos");
        
    }
}
else{
    errores.push("Por favor, ingresa un numero de teléfono");
    
}

// Mostrar errores si los hay
if (errores.length > 0) {
    mostrarErrores(errores);
    return false; // Evitar que el formulario se envíe si hay errores
}

// Si no hay errores, el formulario es válido
return true;

}



function mostrarErrores(errores) {
    
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML="";
    divErrores.style.display="block";

    let ul = document.createElement("ul");

    errores.forEach(function(error) {
        
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
        
    });
    divErrores.appendChild(ul);

}