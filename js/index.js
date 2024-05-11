// Alertas
window.addEventListener("DOMContentLoaded", function () {
    swal({
        title: "¡DESCUENTO DEL 10%!",
        text: "Usa el código \"DICOMO10\" y obtén un 10% de descuento en tu primera compra.",
        icon: "../img/favicon.png",
        button: "Aceptar!",
    });
    document.getElementById("category-kids").addEventListener("click", function () {
        swal({
            title: "PRÓXIMAMENTE",
            text: "Esta página aún no está disponible, lo estará en breves. Disculpa las molestias",
            icon: "../img/favicon.png",
            button: "Aceptar",
        });
    });
<<<<<<< HEAD
    document.getElementById("aceptar-cookies").addEventListener("click", function () {
        document.getElementById("cookies").style.bottom = "-130px";
        window.addEventListener("scroll", function () {
            document.getElementById("cookies").style.display = "none";
        });
=======
    document.getElementById("imagen-sorteo").addEventListener("click", function () {
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        swal({
            title: "PARTICIPACIÓN EN SORTEO",
            text: "Email: ",
            content: "input",
            icon: "../img/favicon.png",
            button: "Aceptar",
        })
            .then((value) => {
                if (value != null && validEmail.test(value)) {
                    swal('Participación enviada correctamente')
                } else {
                    swal('Email incorrecto')
                }
            });
>>>>>>> 973dae5 (Cosas varias)
    });
});

// Fin alertas

const initSlider = () => {
    const imageList = document.querySelector(".carouselP .image-list");
    const slideButtons = document.querySelectorAll(".carouselP .slide-button");
    const sliderScrollbar = document.querySelector(".carouselP .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Manejar el arrastre del scrollbar thumb
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        // Actualizar la posición del thumb en el movimiento del mouse
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Asegurar que el scrollbar thumb se mantenga dentro de los límites
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remover event listeners en el mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Agregar event listeners para la interacción de arrastre
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Deslizar imágenes según los clicks de los botones de slide
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Mostrar u ocultar botones de slide según la posición de scroll
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Actualizar la posición del scrollbar thumb según el scroll de la imagen
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Llamar a estas dos funciones cuando la lista de imágenes se desplace
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);