// Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
// BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.


window.addEventListener('load', function(){    
const animals = ["otter", "elephant", "hyena", "alligator", "meerkat", "capybara"]
const displayResult = document.getElementById('feedback');
function animalFinder(inputString){
    
    for(let i=0; i<animals.length; i++) {
        if(inputString === animals[i]){
            displayResult.innerText = `Yes, we've got a bunch of those`;
            break;
        }else{
            displayResult.innerText = `Nope, there are none of those`;
        }
    }
}


    const userInput = (prompt("What animal are you looking for?")).toLowerCase();
    animalFinder(userInput);
    
})