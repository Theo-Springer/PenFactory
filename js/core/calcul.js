function venteStylos(price) {
    let vente = Math.floor(stockStylos * Math.max(demande, 0) / 100);
    money += vente * price;
    stockStylos -= vente;
    updateDisplay();
}

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

function accumulateMemory() {
    memory += 1;
    if (memory > memoryUpgrade) {
        memory = memoryUpgrade; // Limite la mémoire à 1000
    }
    
    if (memory >= 1000) {
        creativity += 1;
    }
}

// Appeler venteStylos automatiquement toutes les secondes
setInterval(() => {
    venteStylos(price);
}, 100);

setInterval(() => {
    accumulateMemory();
}, 100);