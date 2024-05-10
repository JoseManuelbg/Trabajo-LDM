window.addEventListener("DOMContentLoaded", function () {
    let counterN = 0; // Inicializamos el contador en 0
    const add = document.getElementById("addProduct");
    const less = document.getElementById("removeProduct");
    let text = document.getElementById("countText");
    let totalPrice = document.getElementById("precio").textContent; // Precio del producto
    let total = document.getElementById("total");

    add.addEventListener("click", function () {
        counterN++;
        text.textContent = counterN;
        updateTotal();
    });

    less.addEventListener("click", function () {
        if (counterN >= 1) {
            counterN--;
            text.textContent = counterN;
            updateTotal();
        }
    });

    function updateTotal() {
        let subtotal = (counterN * totalPrice).toFixed(2);
        total.textContent = subtotal;
    }

    // Descuentos
   
});

window.addEventListener("DOMContentLoaded", function () {
    // Tu código aquí
    const promoForm = document.getElementById("promo-form");
    promoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        codigoDescuento(); // Llama a la función de descuento
    });
});

function updateTotalPrice(newPrice) {
    let totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = newPrice.toFixed(2) + "€";
}

function codigoDescuento() {
    let cont = 0;
    const discountCodes = ["JESUSAPRUEBAME", "VIVAFRANCO", "JOSEMANUELESELMEJOR"];
    const promoInput = document.getElementById("promo").value.toUpperCase();

    // Verificar si el código promocional coincide con alguna palabra clave
    if (discountCodes.includes(promoInput) && cont === 0) {
        // Aplicar descuento (por ejemplo, 10%)
        cont ++;
        const totalPriceElement = document.getElementById("total-price");
        const priceBeforeDiscount = parseFloat(totalPriceElement.textContent.replace("€", ""));
        const discount = 0.99; // 10% de descuento
        const discountedPrice = priceBeforeDiscount * (1 - discount);

        // Actualizar el precio mostrado en la página con el nuevo precio después del descuento
        updateTotalPrice(discountedPrice);

 
    }
    return true;
}


