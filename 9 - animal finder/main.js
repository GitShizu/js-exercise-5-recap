// Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
// BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.



const animals = ["otter", "elephant", "hyena", "alligator", "meerkat", "capybara"]
let outcome;
function animalFinder(inputString){
    
    switch (inputString){
        case "otter":
            outcome = true;
            break;
        case "elephant":
            outcome = true;
            break;
        case "hyena":
            outcome = true;
            break;
        case "alligator":
            outcome = true;
            break;
        case "meerkat":
            outcome = true;
            break;
        case "capybara":
            outcome = true;
            break;
        default : false;
    }
return outcome
}

window.addEventListener('load', function(){    
    let displayResult = document.getElementById('feedback');
    const userInput = (prompt("What animal are you looking for?")).toLowerCase();
    animalFinder(userInput);
    if(outcome === true){
        displayResult.innerText = `Yes, we've got a bunch of those`
    }else{
        displayResult.innerText = `Nope, there are none of those`
    }
})