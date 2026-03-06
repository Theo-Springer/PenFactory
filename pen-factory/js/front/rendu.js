// Fonction pour mettre à jour l'affichage du DOM
function updateDisplay() {
    document.getElementById('pen-count').textContent = nbStylos;
    document.getElementById('funds').textContent = money.toFixed(2);
    document.getElementById('pen-stock').textContent = stockStylos;
    document.getElementById('plastic').textContent = nbPlastic;
    document.getElementById('ink').textContent = nbEncre;
}

// Exporter la fonction pour l'utiliser dans main.js
window.updateDisplay = updateDisplay;
