// Fonction pour convertir un nombre décimal en binaire et afficher le résultat
function convertToBinary() {
    // Sélectionner l'élément de saisie et récupérer sa valeur
    const decimalInput = document.getElementById('decimalInput').value;
    
    // Vérifier si la saisie est un nombre valide
    const decimalNumber = parseInt(decimalInput);
    if (isNaN(decimalNumber)) {
        alert('Veuillez entrer un nombre décimal valide');
        return;
    }

    // Convertir le nombre décimal en binaire
    const binaryResult = decimalNumber.toString(2);

    // Sélectionner le paragraphe de résultat et afficher le résultat binaire
    document.getElementById('binaryResult').textContent = `Résultat binaire: ${binaryResult}`;
}
