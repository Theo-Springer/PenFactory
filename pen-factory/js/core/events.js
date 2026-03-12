
function updateSectionsVisibility() {
    const upgradesSection = document.getElementById('upgrades-section');
    if (nbStylos >= 100) {
        upgradesSection.style.display = 'block';
        terminalOutput = "Bravo vous avez fabriqué 100 stylos !";
    } else {
        upgradesSection.style.display = 'none';
    }
}

window.updateSectionsVisibility = updateSectionsVisibility;
