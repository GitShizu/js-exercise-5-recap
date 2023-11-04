// Crea una funzione che ordina una lista di numeri dal più piccolo al più grande. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.


function numberSorter (unsortedList){
    
    const sortedList = [];
    const inputLength = unsortedList.length;

    for(let i=0; i<inputLength; i++){
        let referenceNumber = Number.MAX_SAFE_INTEGER;
        for(let n=0; n<unsortedList.length; n++){
            let currentNumber = unsortedList[n];
            if (currentNumber < referenceNumber){
                referenceNumber = currentNumber;
            }
        }
        sortedList.push(referenceNumber);
        const lowestNumberIndex = unsortedList.indexOf(referenceNumber);
        unsortedList.splice(lowestNumberIndex, 1);
    }

    return sortedList
}

window.addEventListener('load', function(){
    const numbers = [];
    const howManyNumbers = Number(prompt("How many numbers would you like to sort?"));
    for(let i=1; i<=howManyNumbers; i++){
        let number = Number(prompt(`Type the number for the slot ${i}`))
        numbers.push(number);
    }
    const displayResult = document.getElementById('feedback');
    displayResult.innerText = `Here's your sorted list: ${numberSorter(numbers)}`;
})

