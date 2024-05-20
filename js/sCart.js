window.addEventListener("DOMContentLoaded", function () {
    //Verificador de que el codigo de descuento se a usado una vez
    let codeInput = 0;
    

    // Obtener todos los productos
    const products = document.querySelectorAll(".products");

    products.forEach(product => {
        let counterN = 0;
        const addButton = product.querySelector("#addProduct");
        const removeButton = product.querySelector("#removeProduct");
        const textElement = product.querySelector("#countText");
        const priceElement = product.querySelector("#precio");
        const totalElement = document.getElementById("total-price");

        // Obtener el precio del producto
        const price = parseFloat(priceElement.textContent.replace("€", "").replace(",", "."));

        addButton.addEventListener("click", function () {
            counterN++;
            textElement.textContent = counterN;
            updateTotal();
        });

        removeButton.addEventListener("click", function () {
            if (counterN >= 1) {
                counterN--;
                textElement.textContent = counterN;
                updateTotal();
            }
        });

        function updateTotal() {
            let subtotal = 0;
            products.forEach(product => {
                const priceElement = product.querySelector("#precio");
                const countText = product.querySelector("#countText");
                const price = parseFloat(priceElement.textContent.replace("€", "").replace(",", "."));
                const count = parseInt(countText.textContent);
                subtotal += price * count;
            });
            totalElement.textContent = subtotal.toFixed(2) + "€";
        }
    });

    // Código de descuento
    const promoForm = document.getElementById("promo-form");
    promoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario
        codigoDescuento(); // Llama a la función de descuento
    });

    function updateTotalPrice(newPrice) {
        const totalPriceElement = document.getElementById("total-price");
        totalPriceElement.textContent = newPrice.toFixed(2) + "€";
    }

    function codigoDescuento() {
        const discountCodes = ["JESUSAPRUEBAME", "VIVAFRANCO", "JOSEMANUELESELMEJOR"];
        const promoInput = document.getElementById("promo").value.toUpperCase();
        // Verificar si el código promocional coincide con alguna palabra clave
        if (discountCodes.includes(promoInput) && codeInput <1) {
            codeInput++;
            // Aplicar descuento (por ejemplo, 10%)
            const totalPriceElement = document.getElementById("total-price");
            const priceBeforeDiscount = parseFloat(totalPriceElement.textContent.replace("€", ""));
            const discount = 0.99; // 10% de descuento

            const discountedPrice = priceBeforeDiscount * (1 - discount);
            // Actualizar el precio mostrado en la página con el nuevo precio después del descuento
            updateTotalPrice(discountedPrice);
            
            // Actualizar el valor del descuento en el HTML
            const descuentoElement = document.getElementById("desc");
            descuentoElement.textContent = "99%"; // Cambiar el valor del descuento en el HTML
        }
        return true;
    }
});
