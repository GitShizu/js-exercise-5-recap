// Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

// string generator
// function with number of strings as parameter



    const strings = [];
    let string = "";
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

   function stringGenerator (min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
   }

   for(i=0; i<5; i++){
       string+= characters[stringGenerator(0, characters.length)];
   }
   console.log(string)
    
    
    