/* Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut)
En JS, sélectionnez les "cartes" créées en HTML
Pour chaque carte, faites un event listener sur le click
Sélectionnez dans la carte cliquée, le bouton masqué
Affichez le bouton
*/

//Je selectionne les cartes pour les mettres dans un document

const embrellaCards = document.querySelectorAll(".card");
//Je mets la fonction du click sur la case d'une images
embrellaCards.forEach((embrellaCard) =>{

    embrellaCard.addEventListener('click', () =>{
//Je mets dans la fonction ce qu'elle doit faire "affiche le paragraphe"        
const paragraphe = embrellaCard.querySelector('.paragraphe');

//J'execute la fonction
paragraphe.style.display = "block";

    });
});