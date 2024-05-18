window.addEventListener("DOMContentLoaded", function(){
    const btnToggle = document.querySelector("#abrir-menu");
    btnToggle.addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("google_translate_element").classList.toggle("active");
        document.querySelector("body").classList.toggle("active");
        document.getElementById("logo").classList.toggle("animacion");
        setTimeout(() => {
            document.getElementById("sidebar").style.marginTop = 0;

            document.querySelector("header").style.position = "sticky";
        }, 0);
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
    document.getElementById("imagen-sorteo").addEventListener("click", function () {
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        var rutaIcono = document.title;
        if (rutaIcono === "Dicomo"){
            rutaIcono = "./img/favicon.png";
        } else {
            rutaIcono = "../img/favicon.png";
        }
        swal({
            title: "PARTICIPACIÓN EN SORTEO",
            text: "Email: ",
            content: "input",
            icon: rutaIcono,
            button: "Aceptar",
        })
            .then((value) => {
                if (value != null && validEmail.test(value)) {
                    swal('Participación enviada correctamente')
                } else {
                    swal('Email incorrecto')
                }
            });
    });
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de,ro', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}

