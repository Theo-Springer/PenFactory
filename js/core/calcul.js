function venteStylos(price) {
    while (stockStylos > 0) {
        money += price;
        stockStylos -= 1;
    }
    updateDisplay();
}

// Fonction pour démarrer une nouvelle boucle de machine
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
    
    if (memory >= 1000) {
        creativity += 1;
    }
}

// Appeler venteStylos automatiquement toutes les secondes
setInterval(() => {
    venteStylos(price);
}, 1000);

setInterval(() => {
    accumulateMemory();
}, 100);