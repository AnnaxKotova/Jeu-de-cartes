let deck = []; //le plateau de cartes




//création de jeu de cartes avec son propre couleur
function creation_deck (name_deck){
   //création de 13 cartes
   for (let i = 2; i <= 14; i++) {
      deck.push(i);
   }

   //organisation d'objet avec des cartes avec ses valeurs : nom, valeur, couleur
   //voici il est importante de garder le nombre (ici le clé) car on va les comparer prochainement
   for (let i = 0; i <= deck.length; i++) {
      name_deck = Object.assign(...deck.map(k => ({ [k]: { suit: name_deck, number: k, name: k} })));
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
   
   //pour leur donner le nom correspondant
   for (let element in deck_suit) {
      deck_suit[element]["name"] = element;
    }

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
let all_deck = Object.assign(named_deck_hearts, named_deck_spades, named_deck_diamonds, named_deck_clubs);

//transformation au tableau, le nom est le nombre
const deck_to_play = [].concat(...Object.values(all_deck));

// affichage de toutes les cartes
for (let i = 0; i < 51; i++){
   console.log(deck_to_play[i]);
}

//ou également

for (let element in all_deck) {
   console.log(element);
 }

//mélange du plateau

deck_shuffled = deck_to_play.sort(() => Math.random() - 0.5);


console.log(deck_shuffled.length);

let size = 52/4; //numéro des cards pour 1 player


let preplay = []; //le tableu avec les cards 


for (let i = 0; i <Math.ceil(deck_shuffled.length/size); i++){
   preplay[i] = deck_shuffled.slice((i*size), (i*size) + size);
}

console.log(preplay);

let player1 = preplay[0];
let player2 = preplay[1];
let player3 = preplay[2];
let player4 = preplay[3];

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);


 function compare (card_1, card_2){
    if (card_1["number"] > card_2["number"]){
      console.log(card_1["name"] +" est gagné ");
      
    }
    else if (card_2["number"] > card_1["number"]){
      console.log(card_2["name"] +" est gagné ");
      
   }
   else {
      console.log("Les valeurs des cartes sont égales, ex-aequo");
   }
 }

compare(all_deck["2 de carreaux"], all_deck["3 de piques"]);