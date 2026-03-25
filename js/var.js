// =========================================
// VARIABLES D'ÉTAT DU JEU
// =========================================

// === PRODUCTION ===
let nbStylos = 0;
let stockStylos = 0;
let price = 0.25;
let demande = 50;
let penmachineLevel = 0;
let prixPenMachine = 10.0;

// === RESSOURCES ===
let nbEncre = 1000;
let nbPlastic = 1000;
let money = 0;

// === PRIX VARIABLES ===
let prixPlastic = 10.0;
let prixEncre = 10.0;

// === AMÉLIORATIONS & RESSOURCES SPÉCIALES ===
let trust = 0;
let memory = 0;
let creativity = 0;
let memoryUpgrade = 1000;
let multiplicateurMemory = 1.0;

// === MULTIPLICATEURS ===
let multiplicateurDemande = 1.0;
let multiplicateurProduction = 1.0;
let multiplicateurAchat = 1.0;

// === INTERFACE ===
let terminalOutput = "Bienvenue dans la Pen Factory ! ";

// === SYSTÈME ===
let machineIntervals = [];

// =========================================
// FONCTIONS UTILITAIRES
// =========================================

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changePrices() {
    prixPlastic = 10.0 + Math.floor(Math.random() * 16);
    prixEncre = 10.0 + Math.floor(Math.random() * 16);
    let delai = 5000 + Math.random() * 5000;
    setTimeout(changePrices, delai);
}

window.changePrices = changePrices;

