let nbStylos = 998;
let stockStylos = 0;
let price = 0.25;
let prixPlastic = 10.0;
let prixEncre = 10.0;
let demande = 50;
let penmachineLevel = 0;
let prixPenMachine = 10.0;
let multiplicateurDemande = 1.0;
let terminalOutput = "Bienvenue dans la Pen Factory ! ";

// Ressources pour les améliorations
let memory = 0;
let creativity = 0;
let nbEncre = 1000;
let nbPlastic = 1000;
let money = 110;

// Tableau pour stocker les intervals des machines
let machineIntervals = [];

// Fonction pour changer les prix aléatoirement

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizePrices() {
    prixPlastic = 10.0 + random(0, 15);
    prixEncre = 10.0 + random(0, 15);
    updateDisplay();
    
    // Relancer après 5 à 10 secondes aléatoires
    let delai = 5000 + Math.random() * 5000; // Entre 5 et 10 secondes
    setTimeout(randomizePrices, delai);
}

