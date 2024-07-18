function pairNumbers(min, max) {
    // Initialisation de la chaîne de caractères qui contiendra les nombres pairs
    let result = '';
    
    // Boucle pour parcourir les nombres de min à max
    for (let i = min; i <= max; i++) {
        // Vérification si le nombre est pair
        if (i % 2 === 0) {
            // Ajout du nombre pair et d'une virgule à la chaîne de caractères
            result += i + ',';
        }
    }
    
    // Retirer la dernière virgule, s'il y a des nombres dans la chaîne
    if (result.length > 0) {
        result = result.slice(0, -1);
    }
    
    // Retourne la chaîne de caractères finale
    return result;
}

export default pairNumbers;

// Exemple de tests pour vérifier la fonction pairNumbers
console.log(pairNumbers(1, 10)); // Devrait afficher "2,4,6,8,10"
console.log(pairNumbers(3, 7));  // Devrait afficher "4,6"
console.log(pairNumbers(0, 5));  // Devrait afficher "0,2,4"