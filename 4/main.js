// Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
// Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.



const randomCaseLetters = [];
const characters = "abcdefghijklmnopqrstuvz"
function stringModifier (trueOrfalse, letter) {
    if(trueOrfalse === 1){
        randomCaseCharacter = letter.toUpperCase();        
        }else{
            randomCaseCharacter = letter.toLowerCase();
        }
    return randomCaseCharacter
}


window.addEventListener('load', function(){
for (i=0; i<characters.length; i++){
    let character = characters[i]
    let coinFlip = Math.floor(Math.random()*2); 
    randomCaseLetters.push(stringModifier (coinFlip, character ))
    let displayResult = document.getElementById('feedback');
    displayResult.innerText = randomCaseLetters;
}
})

