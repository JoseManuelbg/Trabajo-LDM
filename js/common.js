window.addEventListener("DOMContentLoaded", function(){
    const btnToggle = document.querySelector("#abrir-menu");
    btnToggle.addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("logo").classList.toggle("animacion");
    });
});

