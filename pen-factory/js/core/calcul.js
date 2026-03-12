while (stockStylos > 0) {
    let vente = Math.min(demande, stockStylos);
    money += vente * price;
    stockStylos -= vente;
}