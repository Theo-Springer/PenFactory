// Attendre que le DOM soit chargé avant de configurer les événements
document.addEventListener('DOMContentLoaded', function() {
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
        if (price < 50.0) {
            price += 0.01;
            demande -= 3 * multiplicateurDemande;
            updateDisplay();
        }
    });

    document.getElementById('btn-lower-price').addEventListener('click', function() {
        if (price > 0.01) {
            price -= 0.01;
            demande += 3 * multiplicateurDemande;
            updateDisplay();
        }
    });

    document.getElementById('btn-buy-plastic').addEventListener('click', function() {
        if (money >= prixPlastic) {
            money -= prixPlastic;
            nbPlastic += 100;
            updateDisplay();
        }
    });

    document.getElementById('btn-buy-ink').addEventListener('click', function() {
        if (money >= prixEncre) {
            money -= prixEncre;
            nbEncre += 100;
            updateDisplay();
        }
    });

    document.getElementById('btn-buy-pen-machine').addEventListener('click', function() {
        if (money >= 10 + 2 * penmachineLevel) {
            money -= 10 + 2 * penmachineLevel;
            prixPenMachine = 10 + 2 * penmachineLevel;
            penmachineLevel++;
            updateDisplay();
        }
    });

    // Rafraîchir l'affichage
    setInterval(updateDisplay, 100);

    // Initialiser l'affichage au chargement
    updateDisplay();
});
