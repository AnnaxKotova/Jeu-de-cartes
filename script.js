let deck = []; //le plateau de cartes
let player1;
let player2;
let player3;
let player4;



//création de jeu de cartes avec son propre couleur
function creation_deck (name_deck){
   //création de 13 cartes
   for (let i = 2; i <= 14; i++) {
      deck.push(i);
   }
   // deck.push("Valet");
   // deck.push("Reine");
   // deck.push("Roi");
   // deck.push("As");


   //organisation d'objet avec des cartes avec ses valeurs : nom, valeur, couleur
   for (let i = 0; i <= deck.length; i++) {
      name_deck = Object.assign(...deck.map(k => ({ [k]: { suit: name_deck, number: k} })));

       return name_deck;
}}


deck_hearts = creation_deck("coeurs");
for (let i = 2; i <= 10; i++){
   deck_hearts[i + " de coeurs"] = deck_hearts[i];
delete deck_hearts[i];
}
deck_hearts['Valet de coeurs'] = deck_hearts[11];
delete deck_hearts[11];
deck_hearts['Reine de coeurs'] = deck_hearts[12];
delete deck_hearts[12];
deck_hearts['Roi de coeurs'] = deck_hearts[13];
delete deck_hearts[13];
deck_hearts['As de coeurs'] = deck_hearts[14];
delete deck_hearts[14];


deck_spades = creation_deck("piques");
for (let i = 2; i <= 10; i++){
   deck_spades[i + " de piques"] = deck_spades[i];
delete deck_spades[i];
}
deck_spades['Valet de piques'] = deck_spades[11];
delete deck_spades[11];
deck_spades['Reine de piques'] = deck_spades[12];
delete deck_spades[12];
deck_spades['Roi de piques'] = deck_spades[13];
delete deck_spades[13];
deck_spades['As de piques'] = deck_spades[14];
delete deck_spades[14];

deck_diamonds = creation_deck("carreaux");
for (let i = 2; i <= 10; i++){
   deck_diamonds[i + " de carreaux"] = deck_diamonds[i];
delete deck_diamonds[i];
}
deck_diamonds['Valet de carreaux'] = deck_diamonds[11];
delete deck_diamonds[11];
deck_diamonds['Reine de carreaux'] = deck_diamonds[12];
delete deck_diamonds[12];
deck_diamonds['Roi de carreaux'] = deck_diamonds[13];
delete deck_diamonds[13];
deck_diamonds['As de carreaux'] = deck_diamonds[14];
delete deck_diamonds[14];

deck_clubs = creation_deck("trèfle");
for (let i = 2; i <= 10; i++){
   deck_clubs[i + " de trèfle"] = deck_clubs[i];
delete deck_clubs[i];
}
deck_clubs['Valet de trèfle'] = deck_clubs[11];
delete deck_clubs[11];
deck_clubs['Reine de trèfle'] = deck_clubs[12];
delete deck_clubs[12];
deck_clubs['Roi de trèfle'] = deck_clubs[13];
delete deck_clubs[13];
deck_clubs['As de trèfle'] = deck_clubs[14];
delete deck_clubs[14];

const all_desk = Object.assign(deck_hearts, deck_spades, deck_diamonds, deck_clubs);

console.log(all_desk);

