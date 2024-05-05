window.addEventListener("DOMContentLoaded", function(){
    const btnToggle = document.querySelector("#abrir-menu");
    btnToggle.addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("logo").classList.toggle("animacion");
        document.getElementById("mostrar-subclases1").addEventListener("click", function(){
            document.getElementById("mostrar-subclases1").classList.toggle("animacion");
            document.querySelectorAll(".subclase-sidebar1").forEach(element => {
                element.classList.toggle("active-subclase");
            });
        });
        document.getElementById("mostrar-subclases2").addEventListener("click", function(){
            document.getElementById("mostrar-subclases2").classList.toggle("animacion");
            document.querySelectorAll(".subclase-sidebar2").forEach(element => {
                element.classList.toggle("active-subclase");
            });
        });
    });
});

