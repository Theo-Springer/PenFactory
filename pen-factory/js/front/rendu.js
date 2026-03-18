// Fonction pour mettre à jour l'affichage du DOM
function updateDisplay() {
    document.getElementById('pen-count').textContent = nbStylos;
    document.getElementById('funds').textContent = money.toFixed(2);
    document.getElementById('pen-stock').textContent = stockStylos;
    document.getElementById('plastic').textContent = nbPlastic;
    document.getElementById('ink').textContent = nbEncre;
    document.getElementById('pen-price').textContent = price.toFixed(2);
    document.getElementById('PrixPlastic').textContent = prixPlastic.toFixed(2);
    document.getElementById('PrixEncre').textContent = prixEncre.toFixed(2);
    document.getElementById('demande').textContent = demande;
    document.getElementById('terminal-output').textContent = terminalOutput;
    document.getElementById('pen-machine-level').textContent = penmachineLevel;
    document.getElementById('prixPenMachine').textContent = prixPenMachine.toFixed(2);
    
    // Vérifier la visibilité des sections
    updateSectionsVisibility();
    updateSectionsVisibility2();
}

// Exporter la fonction pour l'utiliser dans main.js
window.updateDisplay = updateDisplay;
