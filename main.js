//initialisation des variables
let listeNonTriee = [44,55,42,5,10];

let listeTriee = [];

let arrayIsSorted = false;

// Bubble sort

// https://www.youtube.com/watch?v=lyZQPjUT5B4


// implémenter un algorithme de tri à bulle (pas de copy / paste)

while (arrayIsSorted === false) {

    for (let i = 0 ; i < (listeNonTriee.length); i++) {
        
        let transitVariable = 0;
        
        if(listeNonTriee[i] > listeNonTriee[i+1]){
            transitVariable = listeNonTriee[i];
            listeNonTriee[i] = listeNonTriee[i+1];
            listeNonTriee[i+1] = transitVariable;
        }

        for (let i = 0; i < (listeNonTriee.length - 1); i++) {
            if (listeNonTriee[i] < listeNonTriee[i + 1]) {
                arrayIsSorted = true
            } else if (listeNonTriee[i] > listeNonTriee[i + 1]) {
                arrayIsSorted = false
                break;
            }
        }
    }
}

console.log(listeNonTriee);


