// Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente). Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
// Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto. Altrimenti, mostragli che ha perso.




const numberOfcoinFlips = Number(prompt("How many times do you wish to flip the coin?"));
let headsOrTails = prompt("Chose heads or tails");
let heads = 0;
let tails = 0;


function coinFlipper (){
    
        let outcome = "";
        let coinFlip = Math.floor(Math.random()*2);
        if(coinFlip === 1){
            heads++
             outcome = "Heads";
        }else{
            tails++
            outcome = "Tails";
        }
        return outcome
        
}
window.addEventListener('load', function(){
let displayResult = document.getElementById('feedback');
displayResult.innerText = `Here are the outcomes:
`
    for (i=0; i<numberOfcoinFlips; i++){
        
        displayResult.innerText += `
        ${coinFlipper()}`
    }

    if(heads>tails && headsOrTails == "heads" || heads<tails && headsOrTails == "tails"){
        displayResult.innerText +=`


        The score is:

        Heads  ${heads}
        Tails  ${tails}
        
        You win!`;
    }else if(heads>tails && headsOrTails == "tails" || heads<tails && headsOrTails == "heads"){
        displayResult.innerText +=`


        The score is:

        Heads  ${heads}
        Tails  ${tails}
        
        You lose!`;
    }else{
        displayResult.innerText +=`


        The score is:

        Heads  ${heads}
        Tails  ${tails}
        
        It's a draw!`;
    }
})