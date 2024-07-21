function calculatePrice() {
    const price = parseFloat(document.getElementById('price').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    if (isNaN(price) || isNaN(exchangeRate)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const priceInQuetzales = price * exchangeRate;

    let profitMargin;
    if (priceInQuetzales <= 10) {
        profitMargin = 80;
    } else if (priceInQuetzales <= 50) {
        profitMargin = 60;
    } else if (priceInQuetzales <= 100) {
        profitMargin = 40;
    } else if (priceInQuetzales <= 200) {
        profitMargin = 35;
    } else {
        profitMargin = 30;
    }

    const finalPrice = priceInQuetzales * (1 + (profitMargin / 100)) + 9; // Agregando Q9 de gastos de empaque y envío

    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
}
