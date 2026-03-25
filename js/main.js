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
    const btnMakePen = document.getElementById('btn-make-pen');
    if (btnMakePen) btnMakePen.addEventListener('click', handleMakePen);
    
    // Gestion des prix
    const btnRaisePrice = document.getElementById('btn-raise-price');
    if (btnRaisePrice) btnRaisePrice.addEventListener('click', handleRaisePrice);
    
    const btnLowerPrice = document.getElementById('btn-lower-price');
    if (btnLowerPrice) btnLowerPrice.addEventListener('click', handleLowerPrice);
    
    // Achat de ressources
    const btnBuyPlastic = document.getElementById('btn-buy-plastic');
    if (btnBuyPlastic) btnBuyPlastic.addEventListener('click', handleBuyPlastic);
    
    const btnBuyInk = document.getElementById('btn-buy-ink');
    if (btnBuyInk) btnBuyInk.addEventListener('click', handleBuyInk);
    
    // Achat de machines
    const btnBuyPenMachine = document.getElementById('btn-buy-pen-machine');
    if (btnBuyPenMachine) btnBuyPenMachine.addEventListener('click', handleBuyPenMachine);
    
    // Améliorations mémoire
    const btnUpgradeMemory = document.getElementById('btn-upgrade-memory');
    if (btnUpgradeMemory) btnUpgradeMemory.addEventListener('click', handleUpgradeMemory);
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
