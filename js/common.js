window.addEventListener("DOMContentLoaded", function(){
    const btnToggle = document.querySelector("#abrir-menu");
    btnToggle.addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("logo").classList.toggle("animacion");
        document.getElementById("mostrar-subclases").addEventListener("click", function(){
            document.getElementById("subclase-sidebar").classList.toggle("active-subclase");
            console.log("Llega")
        });
    });
});

