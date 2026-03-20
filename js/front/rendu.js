// =========================================
// MISE À JOUR DE L'AFFICHAGE
// =========================================

function updateDisplay() {
    // Afficher les compteurs principaux
    document.getElementById('pen-count').textContent = nbStylos;
    document.getElementById('funds').textContent = money.toFixed(2);
    document.getElementById('pen-stock').textContent = stockStylos;
    
    // Afficher les ressources
    document.getElementById('plastic').textContent = nbPlastic;
    document.getElementById('ink').textContent = nbEncre;
    
    // Afficher les prix
    document.getElementById('pen-price').textContent = price.toFixed(2);
    document.getElementById('PrixPlastic').textContent = prixPlastic.toFixed(2);
    document.getElementById('PrixEncre').textContent = prixEncre.toFixed(2);
    
    // Afficher les stats
    document.getElementById('demande').textContent = demande;
    document.getElementById('terminal-output').textContent = terminalOutput;
    document.getElementById('pen-machine-level').textContent = penmachineLevel;
    document.getElementById('prixPenMachine').textContent = prixPenMachine.toFixed(2);
    document.getElementById('trust').textContent = trust;
    
    // Afficher les ressources d'amélioration
    if (document.getElementById('memory')) {
        document.getElementById('memory').textContent = memory + " / 1000";
    }
    if (document.getElementById('creativity')) {
        document.getElementById('creativity').textContent = creativity;
    }
    
    // Mettre à jour les sections visibles
    updateSectionsVisibility();
    updateSectionsVisibility2();
    
    // Afficher les améliorations disponibles
    renderUpgrades();
}

// =========================================
// RENDU DES AMÉLIORATIONS
// =========================================

function renderUpgrades() {
    const upgradesContainer = document.getElementById('upgrade-choice');
    if (!upgradesContainer) return;
    
    upgradesContainer.innerHTML = '';
    
    const upgradesList = getAllUpgrades().slice(0, 5);
    
    upgradesList.forEach(upgrade => {
        const upgradeBtn = document.createElement('div');
        upgradeBtn.className = 'upgrade-card';
        upgradeBtn.setAttribute('data-upgrade-id', upgrade.id);
        upgradeBtn.onclick = () => applyUpgrade(upgrade.id);
        
        upgradeBtn.innerHTML = `
            <div class="upgrade-header">
                <h3>${upgrade.name}</h3>
            </div>
            <div class="upgrade-body">
                <p>${upgrade.description}</p>
                <div class="upgrade-costs">
                    <div class="cost-item">Mémoire: ${upgrade.memoryCost}</div>
                    <div class="cost-item">Créativité: ${upgrade.creativityCost}</div>
                </div>
            </div>
        `;
        
        upgradesContainer.appendChild(upgradeBtn);
    });
}

// =========================================
// APPLICATION DES AMÉLIORATIONS
// =========================================

function applyUpgrade(upgradeId) {
    const upgrade = getUpgrade(upgradeId);
    
    if (!upgrade) return;
    
    // Vérifier les ressources
    if (memory < upgrade.memoryCost) {
        terminalOutput = "Mémoire insuffisante !";
        return;
    }
    
    if (creativity < upgrade.creativityCost) {
        terminalOutput = "Créativité insuffisante !";
        return;
    }
    
    // Déduire les coûts
    memory -= upgrade.memoryCost;
    creativity -= upgrade.creativityCost;
    
    // Appliquer l'effet selon le type
    switch(upgrade.type) {
        case 'production':
            multiplicateurProduction += upgrade.effect;
            break;
        case 'purchase':
            multiplicateurAchat += upgrade.effect;
            break;
        case 'demand':
            multiplicateurDemande += upgrade.effect;
            break;
        case 'trust':
            trust += upgrade.effect;
            break;
    }
    
    terminalOutput = `Amélioration "${upgrade.name}" appliquée !`;
    updateDisplay();
}

// =========================================
// EXPORTS GLOBAUX
// =========================================

window.updateDisplay = updateDisplay;
window.renderUpgrades = renderUpgrades;
window.applyUpgrade = applyUpgrade;
