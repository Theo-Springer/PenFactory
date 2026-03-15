function venteStylos(price) {
    while (stockStylos > 0) {
        money += price;
        stockStylos -= 1;
    }
    updateDisplay();
}                           

// Appeler venteStylos automatiquement toutes les secondes
setInterval(() => venteStylos(price), 1000);