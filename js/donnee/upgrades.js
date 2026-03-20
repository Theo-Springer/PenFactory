// =========================================
// DONNÉES DES AMÉLIORATIONS
// =========================================

const upgrades = [
    {
        id: "machine_boost",
        name: "Optimisation des machines",
        description: "Augmente la production de 20%",
        memoryCost: 100,
        creativityCost: 0,
        effect: 0.2,
        type: "production"
    },
    {
        id: "poeme",
        name: "Poème",
        description: "Vous écrivez un poème pour les employés",
        memoryCost: 0,
        creativityCost: 100,
        effect: 1,
        type: "trust"
    },
    {
        id: "marketing",
        name: "Stratégie marketing créative",
        description: "Augmente la demande de 25%",
        memoryCost: 500,
        creativityCost: 50,
        effect: 0.25,
        type: "demand"
    },
    {
        id: "innovation",
        name: "Processus innovant",
        description: "Double la vitesse de production",
        memoryCost: 1500,
        creativityCost: 40,
        effect: 1.0,
        type: "production"
    }
];

// =========================================
// FONCTIONS UTILITAIRES
// =========================================

function getUpgrade(id) {
    return upgrades.find(u => u.id === id);
}

function getAllUpgrades() {
    return upgrades;
}

// =========================================
// EXPORTS GLOBAUX
// =========================================

window.getUpgrade = getUpgrade;
window.getAllUpgrades = getAllUpgrades;