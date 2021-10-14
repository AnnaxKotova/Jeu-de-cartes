let deck = []; //le plateau de cartes
let player1;
let player2;
let player3;
let player4;



//création de jeu de cartes avec son propre couleur
function creation_deck (name_deck_suit, name_deck){
   //création de 13 cartes
   for (let i = 2; i <= 10; i++) {
      deck.push(i);
   }
   deck.push("Valet");
   deck.push("Reine");
   deck.push("Roi");
   deck.push("As");
   //organisation d'objet avec des cartes avec ses valeurs : nom, valeur, couleur
   for (let i = 0; i <= deck.length; i++) {
      name_deck_suit = Object.assign(...deck.map(k => ({ [k]: { suit: name_deck, value: (k+' de '+name_deck), number: deck.indexOf(k)
       } })));
       return name_deck_suit;
}}

deck_hearts = creation_deck("deck_hearts", "coeurs");

deck_spades = creation_deck("deck_hearts", "spades");

deck_diamonds = creation_deck("deck_hearts", "carreaux");

deck_clubs = creation_deck("deck_hearts", "trèfle");

let total_deck = [{...deck_hearts}, {...deck_spades}, {...deck_diamonds}, {...deck_clubs}]

let total_deck_all = {...total_deck}

// let total_demo = 
// Object.assign(deck_hearts, deck_spades, deck_clubs, deck_diamonds);

// // let total_deck = extend(deck_hearts, deck_spades, deck_clubs, deck_diamonds);

console.log(total_deck);
console.log(total_deck_all);
