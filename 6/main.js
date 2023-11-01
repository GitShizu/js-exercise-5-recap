// Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). Quindi simula un lancio per il computer e un lancio per l'utente. Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.



function diceRoller (){
   let diceRoll = Math.ceil(Math.random()*6);
   return diceRoll
}

let userDiceRoll = diceRoller();
let computerDiceRoll = diceRoller();

window.addEventListener('load', function(){
    let displayResult = document.getElementById('feedback');
    displayResult.innerText = `Here are the outcomes:

    Computer rolled ${computerDiceRoll}
    You rolled     ${userDiceRoll}
    `
    if(userDiceRoll>computerDiceRoll){
        displayResult.innerText += `
        
        You win!`
    }else if(userDiceRoll<computerDiceRoll){
        displayResult.innerText += `
        
        You lose!`
    }else{
        displayResult.innerText += `
        
        It's a draw!`
    }
})
