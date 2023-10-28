// Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

function wordFlipper (word){
    let functionResult = "";
    for(i=word.length -1; i>=0; i-- ){
        let letter = word[i]
        functionResult += letter
    }
    return functionResult
};



window.addEventListener('load', function(){
    let userInput = prompt("Type the word you want to flip here");
    let flippedWord = wordFlipper(userInput);
    let display = document.getElementById('feedback');
    display.innerText = `Your word has been flipped! Here you go: ${flippedWord}`;
});