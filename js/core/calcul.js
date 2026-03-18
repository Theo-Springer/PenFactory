function venteStylos(price) {
    while (stockStylos > 0) {
        money += price;
        stockStylos -= 1;
    }
    updateDisplay();
}

// Fabriquer automatiquement des stylos avec les machines
function PenMachine() {   
    for (let i = 0; i < penmachineLevel; i++) {
        // Vérifier s'il y a assez d'encre et de plastique
        if (nbEncre >= 1 && nbPlastic >= 1) {
            nbStylos++;
            stockStylos++;
            nbEncre--;
            nbPlastic--;
            pensMade++;
        } else {
            // Pas assez de ressources, arrêter les machines
            break;
        }
    }
}

// Accumuler la mémoire progressivement
function accumulateMemory() {
    // Accumule 1 point de mémoire par cycle
    memory += 1;
    
    if (memory >= 1000) {
        memory = 0;
        creativity += 1;
        terminalOutput = "🧠 Mémoire pleine ! +1 Créativité gagnée !";
    }
}

// Appeler venteStylos et PenMachine automatiquement toutes les secondes
setInterval(() => {
    venteStylos(price);
    PenMachine();
}, 1000);

setInterval(() => {accumulateMemory();}, 100);