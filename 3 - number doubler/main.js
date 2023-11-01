// Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

// function with number(to be doubled) as parameter
// for cycle that uses the function with userinput as parameter and shows the result

function numberDoubler (number){
    let doubledNumber = number * 2
    return doubledNumber
}
listOfdoubledNumbers="";
window.addEventListener('load', function(){
    for(i=0; i<10; i++){
        
            userInput = Number(prompt("Type the number you want to double here"));
            let displayResult = document.getElementById('feedback');
            listOfdoubledNumbers+= `
            Doubled number ${i+1}:  ${numberDoubler(userInput)}`;
            displayResult.innerText = listOfdoubledNumbers;
    };
});
        
            

