window.addEventListener("DOMContentLoaded", function(){
    const btnToggle = document.querySelector("#abrir-menu");
    btnToggle.addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("google_translate_element").classList.toggle("active");
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
    document.getElementById("imagen-sorteo").addEventListener("click", function () {
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        swal({
            title: "PARTICIPACIÓN EN SORTEO",
            text: "Email: ",
            content: "input",
            icon: "/img/favicon.png",
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
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}

