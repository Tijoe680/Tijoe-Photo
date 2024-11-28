// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let angle = 0;

    // Fonction pour tourner manuellement au clic (facultatif)
    document.addEventListener('click', () => {
        angle += 40; // Chaque cellule est à 40° l'une de l'autre
        carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    });
});
document.getElementById("toggleButton").addEventListener("click", function () {
    const lotDiv = document.querySelector(".lot");
    lotDiv.classList.toggle("expanded"); // Ajoute ou supprime la classe
});
document.querySelector("#menu button").onclick = function() {
    document.querySelector("#menu ul").classList.toggle("visible");
};

// Récupère les boutons
const toggleButton = document.getElementById('toggleButton');
const voirPlusButton = document.getElementById('voirPlusButton');

// Initialement, le bouton "Voir plus" est masqué
voirPlusButton.style.display = 'none';

// Ajoute un événement de clic sur le bouton "Clic ICI"
toggleButton.addEventListener('click', () => {
    // Vérifie l'état actuel et applique un délai pour le changement
    if (voirPlusButton.style.display === 'none') {
        // Affiche le bouton avec un délai d'une seconde
        setTimeout(() => {
            voirPlusButton.style.display = 'block';
        }, 1000); // 1000 ms = 1 seconde
    } else {
        // Masque immédiatement le bouton
        voirPlusButton.style.display = 'none';
    }
}); 

////////////////////pop up////////////////////////////////////////////////////
// Récupère toutes les images du carrousel
const carouselImages = document.querySelectorAll('.carousel__cell img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');

// Ajoute un événement de clic à chaque image
carouselImages.forEach(image => {
    image.addEventListener('click', () => {
        // Affiche la pop-up avec l'image cliquée
        popupImage.src = image.src;
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';
    });
});

// Ferme la pop-up quand le bouton "X" est cliqué
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
});

// Ferme la pop-up quand on clique sur l'arrière-plan
popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
});

