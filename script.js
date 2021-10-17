//Initialisation du jeu

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
// for (let i = 0; i < 51; i++){
//    console.log(deck_to_play[i]);
// }

//ou également

// for (let element in all_deck) {
//    console.log(element);
//  }

//mélange du plateau

deck_shuffled = deck_to_play.sort(() => Math.random() - 0.5);

let size = 52/4; //numéro des cards pour 1 player

let preplay = []; //le tableu avec les cards pour chaque joueur

//distribution de toutes les cartes pour chaque jouer
for (let i = 0; i <Math.ceil(deck_shuffled.length/size); i++){
   preplay[i] = deck_shuffled.slice((i*size), (i*size) + size);
}

let player1 = preplay[0];
let player2 = preplay[1];
let player3 = preplay[2];
let player4 = preplay[3];



//Gestion d'un "pli"
function choice_card (player){
   card = player[Math.floor(Math.random()*player.length)];
   return card;
}


function comparison (card_1, card_2){
   if (card_1["number"] > card_2["number"]){
   //   console.log(card_1["name"] +" est gagné "+ ", joueur 1");
     return(card_1);
   }
   else if (card_2["number"] > card_1["number"]){
   //   console.log(card_2["name"] +" est gagné " + ", joueur 2");
     return(card_2);
  }
  else {
   //   console.log("Les valeurs des cartes sont égales, ex-aequo");
     //pour choix de la carte randomisé
     let card_draw = [card_1, card_2][Math.floor(Math.random()*2)]
     return(card_draw);
  }
}

let round = document.getElementById("round");
let board = document.getElementById("board");

this.addEventListener("click", function(){
   console.log('AAAA');
   if (player1.length !== 0){
      card_player1 = choice_card(player1);
   }
   if (player2.length !== 0){
      card_player2 = choice_card(player2);
   }
   if (player3.length !== 0){
      card_player3 = choice_card(player3);
   }
   if (player4.length !== 0){
      card_player4 = choice_card(player4);
   }
   
   console.log(card_player1, card_player2, card_player3, card_player4);



   //tout les joueurs ont des cartes
   if (((player1.length !== 0) && (player2.length !== 0)) && ((player3.length !== 0) && (player4.length !== 0))){
   card_winner = comparison(comparison(card_player1, card_player2), comparison(card_player3, card_player4));
   }
   else{
      //le premier joueur est perdu
   if (player1.length === 0){
      card_winner = comparison(card_player2, comparison(card_player3, card_player4));
      if (player2.length === 0){
         card_winner = comparison(card_player3, card_player4);
      }
      else if (player3.length === 0){
         card_winner = comparison(card_player2, card_player4);
      }
      else if (player4.length === 0){
         card_winner = comparison(card_player2, card_player3);
      }
   }
   //le deuxième joueur est perdu
   else if (player2.length === 0){
      card_winner = comparison(card_player1, comparison(card_player3, card_player4));
      if (player1.length === 0){
         card_winner = comparison(card_player3, card_player4);
      }
      else if (player3.length === 0){
         card_winner = comparison(card_player1, card_player4);
      }
      else if (player4.length === 0){
         card_winner = comparison(card_player1, card_player3);
      }
   }
   //troisième joueur est perdu
   else if (player3.length === 0){
      card_winner = comparison(card_player1, comparison(card_player2, card_player4));
      if (player1.length === 0){
         card_winner = comparison(card_player2, card_player4);
      }
      else if (player2.length === 0){
         card_winner = comparison(card_player1, card_player4);
      }
      else if (player4.length === 0){
         card_winner = comparison(card_player1, card_player2);
      }
   }
   //le quatrième joueur est perdu
   else if (player4.length === 0){
      card_winner = comparison(card_player1, comparison(card_player2, card_player3));
      if (player1.length === 0){
         card_winner = comparison(card_player2, card_player3);
      }
      else if (player2.length === 0){
         card_winner = comparison(card_player1, card_player3);
      }
      else if (player3.length === 0){
         card_winner = comparison(card_player1, card_player2);
      }
   }
   }

   if (player1.includes(card_winner)){
      if ((player2.length === 0) && (player3.length === 0) && ((player4.length !== 0))){
         player1.push(card_player4);
      }
      else if ((player2.length === 0) && (player3.length !== 0) && (player4.length === 0)){ 
         player1.push(card_player3);
      }
      else if ((player2.length !== 0) && (player3.length === 0) && (player4.length === 0)){ 
         player1.push(card_player2);
      }
      else if ((player2.length !== 0) && (player3.length !== 0) && (player4.length === 0)){ 
         player1.push(card_player2, card_player3);
      }
      else if ((player2.length !== 0) && (player3.length === 0) && (player4.length !== 0)){ 
         player1.push(card_player2, card_player4);
      }
      else if ((player2.length === 0) && (player3.length !== 0) && (player4.length !== 0)){ 
         player1.push(card_player3, card_player4);
      }
      else{
         player1.push(card_player2, card_player3, card_player4);    
      }  
      player2.splice(player2.indexOf(card_player2), 1);
      player3.splice(player3.indexOf(card_player3), 1);  
      player4.splice(player4.indexOf(card_player4), 1);
   }
   else if (player2.includes(card_winner)){
      if ((player1.length === 0) && (player3.length === 0) && ((player4.length !== 0))){
         player2.push(card_player4);
      }
      else if ((player1.length === 0) && (player3.length !== 0) && (player4.length === 0)){ 
         player2.push(card_player3);
      }
      else if ((player1.length !== 0) && (player3.length === 0) && (player4.length === 0)){ 
         player2.push(card_player1);
      }
      else if ((player1.length !== 0) && (player3.length !== 0) && (player4.length === 0)){ 
         player2.push(card_player1, card_player3);
      }
      else if ((player1.length !== 0) && (player3.length === 0) && (player4.length !== 0)){ 
         player2.push(card_player1, card_player4);
      }
      else if ((player1.length === 0) && (player3.length !== 0) && (player4.length !== 0)){ 
         player2.push(card_player3, card_player4);
      }
      else{
         player2.push(card_player1, card_player3, card_player4); 
      }
      player1.splice(player1.indexOf(card_player1), 1);
      player3.splice(player3.indexOf(card_player3), 1);  
      player4.splice(player4.indexOf(card_player4), 1);
   }
   else if (player3.includes(card_winner)){
      if ((player1.length === 0) && (player2.length === 0) && ((player4.length !== 0))){
            player3.push(card_player4);
         }
         else if ((player1.length === 0) && (player2.length !== 0) && (player4.length === 0)){ 
            player3.push(card_player2);
         }
         else if ((player1.length !== 0) && (player2.length === 0) && (player4.length === 0)){ 
            player3.push(card_player1);
         }
         else if ((player1.length !== 0) && (player2.length !== 0) && (player4.length === 0)){ 
            player3.push(card_player1, card_player2);
         }
         else if ((player1.length !== 0) && (player2.length === 0) && (player4.length !== 0)){ 
            player3.push(card_player1, card_player4);
         }
         else if ((player1.length === 0) && (player2.length !== 0) && (player4.length !== 0)){ 
            player3.push(card_player2, card_player4);
         }
         else{
            player3.push(card_player1, card_player2, card_player4);
      }
      player1.splice(player1.indexOf(card_player1), 1);
      player2.splice(player2.indexOf(card_player2), 1);  
      player4.splice(player4.indexOf(card_player4), 1);  
   }
   else if (player4.includes(card_winner)){
      if ((player1.length === 0) && (player2.length === 0) && ((player3.length !== 0))){
         player4.push(card_player3);
      }
      else if ((player1.length === 0) && (player2.length !== 0) && (player3.length === 0)){ 
         player4.push(card_player2);
      }
      else if ((player1.length !== 0) && (player2.length === 0) && (player3.length === 0)){ 
         player4.push(card_player1);
      }
      else if ((player1.length !== 0) && (player2.length !== 0) && (player3.length === 0)){ 
         player4.push(card_player1, card_player2);
      }
      else if ((player1.length !== 0) && (player2.length === 0) && (player3.length !== 0)){ 
         player4.push(card_player1, card_player3);
      }
      else if ((player1.length === 0) && (player2.length !== 0) && (player3.length !== 0)){ 
         player4.push(card_player2, card_player3);
      }
      else{
         player4.push(card_player1, card_player2, card_player3);
      }
      player1.splice(player1.indexOf(card_player1), 1);
      player2.splice(player2.indexOf(card_player2), 1); 
      player3.splice(player3.indexOf(card_player3), 1);         
   };

   console.log(player1);
   console.log(player2);
   console.log(player3);
   console.log(player4);  

   console.log(player1.length + player2.length + player3.length + player4.length);
   
if (player1.length === 0){
   board.innerHTML += "Joueur 1 est perdu !";
}
if (player2.length === 0){
   board.innerHTML += "Joueur 2 est perdu !";
}
if (player3.length === 0){
   board.innerHTML += "Joueur 3 est perdu !";
}
if (player4.length === 0){
   board.innerHTML += "Joueur 4 est perdu !";
}

if (player1.length === 52){
   board.innerHTML += "Game over. Joueur 1 est gagné !";
}
else if (player2.length === 52){
   board.innerHTML += "Game over. Joueur 2 est gagné !";
}
else if (player3.length === 52){
   board.innerHTML += "Game over. Joueur 3 est gagné !";
}
else if (player2.length === 52){
   board.innerHTML += "Game over. Joueur 4 est gagné !";
}
});


