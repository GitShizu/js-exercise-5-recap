// Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

// string generation function
// string joiner function with number of strings as parameter

    
    

// random character index generator
const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function characterRandomizer (min, max) {
    return Math.floor(Math.random()*(max - min)) + min;
}


    
window.addEventListener('load', function(){
    // string joiner

    const strings = [];
    let userInput = prompt("How many strings would you like to join together?")
    function stringJoiner (numberOfstrings) {
    for(i=0; i<numberOfstrings; i++){
        
        // string generate-destroy cycle
        let string = "";
        for(n=0; n<5; n++){
            string+= characters[characterRandomizer(0, characters.length)];
        }
       
        strings.push(string);
    }
    }
    stringJoiner(userInput);
    let displayResult = document.getElementById('feedback');
    displayResult.innerText = `Your strings have been joined! Here you go: ${strings}`;
})
    
    