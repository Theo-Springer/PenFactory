function upgrade_machine_boost() {
    return {
        id: "machine_boost",
        Name: "Optimisation des machines",
        Description: "Augmente la production de 20%",
        memoryCost: 100,
        creativityCost: 0,
        Effect: 0.2,
        type: "production"
    };
}

function upgrade_ink_quality() {
    return {
        id: "ink_quality",
        Name: "Formule d'encre optimisée",
        Description: "Réduit la consommation d'encre de 15%",
        memoryCost: 250,
        creativityCost: 0,
        Effect: 0.15,
        type: "consumption"
    };
}

function upgrade_plastic_quality() {
    return {
        id: "plastic_quality",
        Name: "Formule de plastique optimisée",
        Description: "Réduit la consommation de plastique de 15%",
        memoryCost: 250,
        creativityCost: 0,
        Effect: 0.15,
        type: "consumption"
    };
}

function poeme() {
    return {
        id: "poeme",
        Name: "Poème",
        Description: "Vous ecrivez un poème pour les employer",
        memoryCost: 0,
        creativityCost: 100,
        Effect: 0.2,
        type: "trust"
    };
}


function upgrade_marketing() {
    return {
        id: "marketing",
        Name: "Stratégie marketing créative",
        Description: "Augmente la demande de 25%",
        memoryCost: 500,
        creativityCost: 50,
        Effect: 0.25,
        type: "demand"
    };
}

// Amélioration 6 : Processus de fabrication innovant
function upgrade_innovation() {
    return {
        id: "innovation",
        Name: "Processus innovant",
        Description: "Double la vitesse de production",
        memoryCost: 80,
        creativityCost: 40,
        Effect: 1.0,
        type: "production"
    };
}