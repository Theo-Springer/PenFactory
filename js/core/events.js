
function updateSectionsVisibility() {
    const upgradesSection = document.getElementById('upgrades-section');
    if (nbStylos >= 100) {
        upgradesSection.style.display = 'block';
        terminalOutput = "Bravo vous avez fabriqué 100 stylos !";
    } else {
        upgradesSection.style.display = 'none';
    }
}

function updateSectionsVisibility2() {
    const upgradesSection2 = document.getElementById('upgrades-section2');
    if (nbStylos >= 1000) {
        upgradesSection2.style.display = 'block';
        terminalOutput = "Bravo vous avez fabriqué 1000 stylos !";
    } else {
        upgradesSection2.style.display = 'none';
    }
}

function updateSectionsVisibility3() {
    const upgradesSection3 = document.getElementById('upgrades-section3');
    if (nbStylos >= 2500) {
        upgradesSection3.style.display = 'block';
        terminalOutput = "Bravo vous avez fabriqué 2500 stylos !";
    } else {
        upgradesSection3.style.display = 'none';
    }
}

window.updateSectionsVisibility = updateSectionsVisibility;
window.updateSectionsVisibility2 = updateSectionsVisibility2;
window.updateSectionsVisibility3 = updateSectionsVisibility3;