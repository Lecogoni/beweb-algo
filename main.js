
// intialization des variables 

let liste = [10, 34, 56, 67, 23, 563];

// opération : la boucle for 


// afficher chaque valuer du tableau sur l'UI

let r ;
let a = 0 ;
// afficher chaque valeur du tableau sur l'UI
r = liste[a]
console.log(r)
a++;
r = liste[a]
console.log(r)
a++;
r = liste[a]
console.log(r)

// initialisation de la boucles /2 test de la condition , si la condition est validé on rentre dans la boucle 3/operation entre chaque itération
for(let i = 0;i < liste.length;i++){
    let r = liste [i];
    console.log(" la valeur dans le tableau: " + r );
    console.log("la valeur de l'index (i) : " + i);
    console.log("");
}