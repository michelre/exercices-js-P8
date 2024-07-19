// Créez votre fonction ici

function calculateAverage(numbers) {
    // Vérifier si le paramètre est un tableau et s'il n'est pas vide
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Pas de nombres pour calculer la moyenne"; // Retourner un message d'erreur si le tableau est vide ou non fourni
    }

    // Calculer la somme de tous les nombres dans le tableau
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Calculer la moyenne en divisant la somme par le nombre d'éléments
    const average = sum / numbers.length;

    // Retourner la moyenne calculée
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // Retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // Retourne 20
console.log(calculateAverage([])); // Retourne "Pas de nombres pour calculer la moyenne"
console.log(calculateAverage()); // Retourne "Pas de nombres pour calculer la moyenne"

export default calculateAverage;
