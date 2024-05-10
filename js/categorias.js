// Corazón
window.addEventListener('DOMContentLoaded', function () {
    //Selecciona todos los botones de corazon (rellenos y no rellenos)
    const botonesCorazon = document.querySelectorAll('#boton-corazon');
    const botonesCorazonRelleno = document.querySelectorAll('#boton-corazon-relleno');
    console.log('Hola');

    //Añade la visibilidad a cada par de botones de corazon, recorriendo el array de los botones
    botonesCorazon.forEach((boton) => {
        boton.addEventListener('click', function () {
            console.log('Hola');
            this.style.display = 'none';
            this.parentElement.querySelector('#boton-corazon-relleno').style.display = 'block';
        });
    });

    botonesCorazonRelleno.forEach((botonRelleno) => {
        botonRelleno.addEventListener('click', function () {
            console.log('Hola');
            this.style.display = 'none';
            this.parentElement.querySelector('#boton-corazon').style.display = 'block';
        
        });
    });

});

// Fin corazón