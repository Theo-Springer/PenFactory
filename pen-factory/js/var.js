// Fonction helper pour générer un nombre aléatoire
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nbStylos = 0;
let nbEncre = 1000;
let nbPlastic = 1000;
let money = 0;
let stockStylos = 0;
let price = 0.25;
let prixPlastic = 10.0;
let prixEncre = 10.0;

// Fonction pour changer les prix aléatoirement
function randomizePrices() {
    prixPlastic = 10.0 + random(0, 15);
    prixEncre = 10.0 + random(0, 15);
    updateDisplay();
    
    // Relancer après 5 à 10 secondes aléatoires
    let delai = 5000 + Math.random() * 5000; // Entre 5 et 10 secondes
    setTimeout(randomizePrices, delai);
}

// Lancer la fonction au démarrage
randomizePrices();