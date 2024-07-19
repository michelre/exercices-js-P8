// Fonction pour ajouter des valeurs à l'écran de la calculatrice
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer l'écran de la calculatrice
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Utilisation de eval pour évaluer l'expression
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}
