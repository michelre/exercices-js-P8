// Sélectionner le bouton par son id
const button = document.getElementById('myButton');

// Sélectionner le paragraphe où afficher le message
const messageParagraph = document.getElementById('message');

// Ajouter un observateur d'événement pour le clic sur le bouton
button.addEventListener('click', function() {
    // Afficher le message dans le paragraphe
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});