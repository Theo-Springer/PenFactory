// Rafraîchir l'affichage toutes les secondes
setInterval(updateDisplay, 1000);

// Initialiser l'affichage au chargement
updateDisplay();

// Exemples d'événements pour les boutons
document.getElementById('btn-make-pen').addEventListener('click', function() {
    if (nbEncre >= 1 && nbPlastic >= 1) {
        nbStylos++;
        StockStylos++;
        nbEncre--;
        nbPlastic--;
        updateDisplay();
    }
});

document.getElementById('btn-raise-price').addEventListener('click', function() {
    // À implémenter
});

document.getElementById('btn-lower-price').addEventListener('click', function() {
    // À implémenter
});

document.getElementById('btn-buy-plastic').addEventListener('click', function() {
    // À implémenter
});

document.getElementById('btn-buy-ink').addEventListener('click', function() {
    // À implémenter
});

document.getElementById('btn-upgrade-pen-machine').addEventListener('click', function() {
    // À implémenter
});
