window.addEventListener("DOMContentLoaded", function(){
    const colorNegro = document.getElementById("color-negro");
    const colorBlanco = document.getElementById("color-blanco");
    const fotoPrincipalNegra = document.querySelector(".foto-principal");
    const fotoPrincipalBlanca = document.querySelector(".foto-principal-blanca");
    const fotosSecundariasNegras = document.querySelectorAll(".imagenes-secundarias");
    const fotosSecundariasBlancas = document.querySelectorAll(".imagenes-secundarias-blancas");
    
    colorNegro.addEventListener("click", function(){
        fotoPrincipalNegra.classList.add("active-img");
        fotosSecundariasNegras.forEach((element) => {
            element.classList.add("active-img");
        });
        fotoPrincipalBlanca.classList.remove("active-img");
        fotosSecundariasBlancas.forEach((element) => {
            element.classList.remove("active-img");
        });
        colorNegro.classList.add("active-color")
        colorBlanco.classList.remove("active-color")
    });

    colorBlanco.addEventListener("click", function(){
        fotoPrincipalBlanca.classList.add("active-img");
        fotosSecundariasBlancas.forEach((element) => {
            element.classList.add("active-img");
        });
        fotoPrincipalNegra.classList.remove("active-img");
        fotosSecundariasNegras.forEach((element) => {
            element.classList.remove("active-img");
        });
        colorBlanco.classList.add("active-color")
        colorNegro.classList.remove("active-color")
    });
});