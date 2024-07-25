// Créez votre fonction ici

function calculate(a, b, operator) {
    // Utilisation de la structure switch pour déterminer l'opération à effectuer
    switch (operator) {
        case '+':
            // Si l'opérateur est '+', retourner la somme de a et b
            return parseInt(a) + parseInt(b);
        case '-':
            // Si l'opérateur est '-', retourner la différence entre a et b
            return parseInt(a) - parseInt(b);
        case '*':
            // Si l'opérateur est '*', retourner le produit de a et b
            return parseInt(a) * parseInt(b);
        case '/':
            // Si l'opérateur est '/', vérifier si b est zéro pour éviter la division par zéro
            if (b === 0) {
                return "Division by zero is not allowed"; // Retourner un message d'erreur si b est zéro
            }
            return parseInt(a) / parseInt(b); // Sinon, retourner le quotient de a et b
        default:
            // Si l'opérateur n'est pas reconnu, retourner un message d'erreur
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate;
