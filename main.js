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

console.log('Arry trié : ');
console.log(listeNonTriee);



// implémenter une recherche dichotomique sur une liste ordonnée 

// https://www.youtube.com/watch?v=JdwWMnU04pQ

let sortedArray = [2, 5, 7, 14, 23, 26, 30, 33, 38, 44, 49, 50] 
let researchValue = 30;


let left = 0 
let right = sortedArray.length - 1; 

while (left <= right) {
    let middle = parseInt((left + right) / 2) 
    console.log('middle : ' + middle);
    if ( sortedArray[middle] === researchValue) {
        return console.log('in the list');
    } else if (sortedArray[middle] > researchValue) {
        right = middle - 1 
        console.log('right : ' + right);
    } else {
        left = middle + 1
        console.log('left : ' + left);
    }
}

