// =========================================
// LOGIQUE DE CALCUL & FONCTIONS MÉTIER
// =========================================

// === VENTES ===
function venteStylos(price) {
    let vente = Math.floor(stockStylos * Math.max(demande * multiplicateurProduction, 0) / 100);
    money += vente * price;
    stockStylos -= vente;
    updateDisplay();
}

// === AUTOMATISATION (Machines) ===
function startPenMachine() {
    let intervalId = setInterval(() => {
        if (nbEncre >= 1 && nbPlastic >= 1) {
            nbStylos++;
            stockStylos++;
            nbEncre--;
            nbPlastic--;
        }
    }, 1000);
    machineIntervals.push(intervalId);
}

// === ACCUMULATION DE RESSOURCES ===
function accumulateMemory() {
    memory += 1 * multiplicateurMemory;
    if (memory > memoryUpgrade) {
        memory = memoryUpgrade;
    }
    
    if (memory >= 1000) {
        creativity += 1;
    }
}

// =========================================
// BOUCLES DE JEU
// =========================================

// Vendre les stylos automatiquement
setInterval(() => {
    venteStylos(price);
}, 100);

// Accumuler la mémoire
setInterval(() => {
    accumulateMemory();
}, 100);