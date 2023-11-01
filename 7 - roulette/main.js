// Crea una funzione che simula un lancio della roulette (deve ritornare un numero casuale tra 0 e 36).
// Quindi chiedi all'utente se vuole puntare su un numero o su pari/dispari. Quindi esegui un lancio della roulette e fagli sapere se ha vinto.


const userInput = prompt("Type a specific number or the respective keyword for even or odd numbers")
let rouletteOutcome = roulette();
function roulette (){
    let randomNumber = Math.floor(Math.random()*37);
    return randomNumber
}

window.addEventListener('load', function(){    
    let displayResult = document.getElementById('feedback');
    displayResult.innerText = `Here's the outcome: ${rouletteOutcome}`
    if(userInput == rouletteOutcome || userInput === "even" && rouletteOutcome % 2 === 0 || userInput === "odd" && rouletteOutcome % 2 !== 0){
        displayResult.innerText +=`

        You win!`
    }else{
        displayResult.innerText +=`
        
        You lose!`
    } 
})
