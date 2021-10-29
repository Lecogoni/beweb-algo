
// intialization des variables 

let liste = [10, 34, 56, 67, 23, 563];

// opération : la boucle while


// chercher une valeur dans un tableau

let nombreAChercher = 5;

let i = 0; 

while(i < liste.length){
    // comparer valeur de l'iteration avec valeur a chercher
    if (liste[i] === nombreAChercher){
        // si valeur correspond log messsage
        console.log(nombreAChercher + " est dans la liste à l'index " + 1);
        break;
    }
    // si valeur ne correspond pas => go next iteration
    i++
}


// VERSION 2 - BETTER CODE

let nombreAChercher = 5;
let isFind = false;
let i = 0; 

while(i < liste.length && !isFind){
    if (liste[i] === nombreAChercher){
        isFind = !isFind; //isFind = true;
    }
    i++
}

if(isFind){
    console.log('valeur trouvé');
}else{
    console.log('valeur pas dans la liste');
}

// intérêt séparation du code : init variable / traitement / affichage