// Rafraîchir l'affichage toutes les secondes
setInterval(updateDisplay, 100);

// Initialiser l'affichage au chargement
updateDisplay();

// Exemples d'événements pour les boutons
document.getElementById('btn-make-pen').addEventListener('click', function() {
    if (nbEncre >= 1 && nbPlastic >= 1) {
        nbStylos++;
        stockStylos++;
        nbEncre--;
        nbPlastic--;
        updateDisplay();
    }
});

document.getElementById('btn-raise-price').addEventListener('click', function() {
    if (price <= 50.00) {
        price += 0.01;
        publicDemand += 2 * mutiplicateur;
        updateDisplay();
    }
});

document.getElementById('btn-lower-price').addEventListener('click', function() {
    if (price >= 0.01) {
        price -= 0.01;
        publicDemand += 2 * mutiplicateur;
        updateDisplay();
    }
});

document.getElementById('btn-buy-plastic').addEventListener('click', function() {
    if (money >= prix-plastic) {
        money -= prix-plastic;
        nbPlastic += 100;
        updateDisplay();
    }
});

document.getElementById('btn-buy-ink').addEventListener('click', function() {
    if (money >= prix-encre) {
        money -= prix-encre;
        nbEncre += 100;
        updateDisplay();
    }
});

document.getElementById('btn-upgrade-pen-machine').addEventListener('click', function() {
    // À implémenter
});
