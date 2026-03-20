// =========================================
// INITIALISATION DU JEU
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupGameLoops();
    updateDisplay();
});

// =========================================
// GESTIONNAIRES D'ÉVÉNEMENTS
// =========================================

function setupEventListeners() {
    // Production manuelle
    document.getElementById('btn-make-pen').addEventListener('click', handleMakePen);
    
    // Gestion des prix
    document.getElementById('btn-raise-price').addEventListener('click', handleRaisePrice);
    document.getElementById('btn-lower-price').addEventListener('click', handleLowerPrice);
    
    // Achat de ressources
    document.getElementById('btn-buy-plastic').addEventListener('click', handleBuyPlastic);
    document.getElementById('btn-buy-ink').addEventListener('click', handleBuyInk);
    
    // Achat de machines
    document.getElementById('btn-buy-pen-machine').addEventListener('click', handleBuyPenMachine);
    
    // Améliorations mémoire
    document.getElementById('btn-buy-memory').addEventListener('click', handleBuyMemory);
    document.getElementById('btn-upgrade-memory').addEventListener('click', handleUpgradeMemory);
}

function setupGameLoops() {
    // Rafraîchir l'affichage
    setInterval(updateDisplay, 100);
    
    // Changer les prix toutes les 5 à 10 secondes
    changePrices();
}

// =========================================
// HANDLERS D'ÉVÉNEMENT
// =========================================

function handleMakePen() {
    if (nbEncre >= 1 && nbPlastic >= 1) {
        nbStylos++;
        stockStylos++;
        nbEncre--;
        nbPlastic--;
        updateDisplay();
    }
}

function handleRaisePrice() {
    if (price < 50.0) {
        price += 0.01;
        demande -= 3 * multiplicateurDemande;
        updateDisplay();
    }
}

function handleLowerPrice() {
    if (price > 0.01) {
        price -= 0.01;
        demande += 3 * multiplicateurDemande;
        updateDisplay();
    }
}

function handleBuyPlastic() {
    if (money >= prixPlastic) {
        money -= prixPlastic;
        nbPlastic += Math.ceil(1000 * multiplicateurAchat);
        updateDisplay();
    }
}

function handleBuyInk() {
    if (money >= prixEncre) {
        money -= prixEncre;
        nbEncre += Math.ceil(1000 * multiplicateurAchat);
        updateDisplay();
    }
}

function handleBuyPenMachine() {
    if (money >= 10 + 2 * penmachineLevel) {
        money -= 10 + 2 * penmachineLevel;
        prixPenMachine = 10 + 2 * penmachineLevel;
        penmachineLevel++;
        startPenMachine();
        updateDisplay();
    }
}

function handleBuyMemory() {
    if (trust >= 1) {
        trust -= 1;
        memoryUpgrade += 1000;
        updateDisplay();
    }
}

function handleUpgradeMemory() {
    if (trust >= 1) {
        trust -= 1;
        multiplicateurMemory += 1;
        updateDisplay();
    }
}
