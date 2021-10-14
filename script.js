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

   //organisation d'objet avec des cartes avec ses valeurs : nom, valeur, couleur
   //voici il est importante de garder le nombre (ici le clé) car on va les comparer prochainement
   for (let i = 0; i <= deck.length; i++) {
      name_deck = Object.assign(...deck.map(k => ({ [k]: { suit: name_deck, number: k} })));
       return name_deck;
}}


//renommage de cartes en accordance avec ses couleurs et noms pour les cartes sans nombres
function named_cards(deck_suit, suit){
   for (let i = 2; i <= 10; i++){
      deck_suit[i + " de " + suit] = deck_suit[i];
   delete deck_suit[i];
   }
   deck_suit['Valet de ' + suit] = deck_suit[11];
   delete deck_suit[11];
   deck_suit['Reine de ' + suit] = deck_suit[12];
   delete deck_suit[12];
   deck_suit['Roi de ' + suit] = deck_suit[13];
   delete deck_suit[13];
   deck_suit['As de ' + suit] = deck_suit[14];
   delete deck_suit[14];
   return deck_suit; //pour avoir le valeur
}

deck_hearts = creation_deck("coeurs");
named_deck_hearts = named_cards(deck_hearts, "coeurs");



deck_spades = creation_deck("piques");
named_deck_spades = named_cards(deck_spades, "piques");



deck_diamonds = creation_deck("carreaux");
named_deck_diamonds = named_cards(deck_diamonds, "carreaux");

deck_clubs = creation_deck("trèfle");
named_deck_clubs = named_cards(deck_clubs, "trèfle");

//le plateau total
const all_desk = Object.assign(named_deck_hearts, named_deck_spades, named_deck_diamonds, named_deck_clubs);



//affichage de toutes les cartes
console.log(all_desk);
for (let element in all_desk) {
   console.log(element);
 }

 console.log(all_desk["2 de carreaux"]["suit"]);

 function compare (card_1, card_2){
    if (card_1 > card_2){
      console.log(card_1 +" est gagné ");
      
    }
    else if (card_2 > card_1){
      console.log(card_2 +" est gagné ");
      
   }
   else {
      console.log("Les valeurs des cartes sont égales");
   }
 }

 console.log(compare (all_desk["2 de carreaux"]["number"], all_desk["3 de piques"]["number"]));