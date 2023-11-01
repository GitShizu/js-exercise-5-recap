// Chiedi all'utente a quale gioco vuole giocare tra lancio della moneta, lancio dei dadi e roulette. Quindi esegui una delle funzioni che avevi già preparato per i precedenti esercizi.


window.addEventListener('load', function(){  
let displayResult = document.getElementById('feedback');

// coin flipper option

function selectedCoinFlipper (){
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
return
}

// dice roller option

function selectedDiceRoller (){
    function diceRoller (){
        let diceRoll = Math.ceil(Math.random()*6);
        return diceRoll
     }
     
    let userDiceRoll = diceRoller();
    let computerDiceRoll = diceRoller();
     
    
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
     
}

// roulette option

function selectedRoulette (){
    const userInput = prompt("Type a specific number or the respective keyword for even or odd numbers")
    let rouletteOutcome = roulette();
    function roulette (){
        let randomNumber = Math.floor(Math.random()*37);
        return randomNumber
    }

    
    
    displayResult.innerText = `Here's the outcome: ${rouletteOutcome}`
    if(userInput == rouletteOutcome || userInput === "even" && rouletteOutcome % 2 === 0 || userInput === "odd" && rouletteOutcome % 2 !== 0){
        displayResult.innerText +=`

        You win!`
    }else{
        displayResult.innerText +=`
        
        You lose!`
    } 
   
}

const gameSelection = prompt(`What game would you like to play? 
    Type 1 for the coin flipper
    Type 2 for the dice roller
    Type 3 for the roulette`);

  
    
    

    switch (gameSelection) {
        case "1":
            displayResult.innerText +=`
            ${selectedCoinFlipper()}`;
            break;
        case "2":
            displayResult.innerText +=`
            ${selectedDiceRoller()}`;
            break;
        case "3":    
            displayResult.innerText +=`
            ${selectedRoulette()}`;
            break; 
        default:
            alert("Whoops! Your input is not a valid one")       
    }
})
