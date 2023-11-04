// Crea una funzione che ordina una lista di numeri. In base a uno dei parametri, viene ordinata dal più piccolo al più grande o viceversa. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Infine, chiedi all'utente se li vuole visualizzare in ordine crescente o decrescente. Mostra all'utente la lista di numeri ordinata nel modo in cui ha chiesto.



function numberSorter (unsortedList, sortingCriteria){
    
    const sortedList = [];
    const inputLength = unsortedList.length;

    for(let i=0; i<inputLength; i++){
        let referenceNumber = unsortedList[0];
        for(let n=0; n<unsortedList.length; n++){
            let currentNumber = unsortedList[n];
            if (currentNumber < referenceNumber){
                referenceNumber = currentNumber;
            }
        }
        const referenceNumberIndex = unsortedList.indexOf(referenceNumber);
        unsortedList.splice(referenceNumberIndex, 1);
        if(sortingCriteria === 'asc'){
        sortedList.push(referenceNumber);
        }else if(sortingCriteria === 'desc'){
            sortedList.unshift(referenceNumber);
        }
        
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
    let sortingCriteriaInput = prompt(`State your preferred sorting criteria by typing asc for ascending or desc for descending`).toLowerCase();
    if(sortingCriteriaInput !== 'asc' && sortingCriteriaInput !== 'desc'){
        alert(`Whoops, ${sortingCriteriaInput} is not a valid sorting criteria, try again!`);
         sortingCriteriaInput = prompt(`State your preferred sorting criteria by typing asc for ascending or desc for descending`).toLowerCase;
    }
    const displayResult = document.getElementById('feedback');
    displayResult.innerText = `Here's your sorted list: ${numberSorter(numbers, sortingCriteriaInput)}`;
})