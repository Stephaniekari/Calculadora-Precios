function calculatePrice() {
    const price = parseFloat(document.getElementById('price').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const profitMargin = parseFloat(document.getElementById('profitMargin').value);

    if (isNaN(price) || isNaN(exchangeRate) || isNaN(profitMargin)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const priceInQuetzales = price * exchangeRate;
    const finalPrice = priceInQuetzales * (1 + (profitMargin / 100));

    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
}
