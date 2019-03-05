/*Sentencia for*/
console.log("FOR STATEMENT");
for (let index = 0; index < 10; index++) {
   console.log(index);
}

/* Sentencia while */
console.log("WHILE STATEMENT");
let index=0;
while (index<10) {
    console.log(index);
    index++;
}


/* Sentencia do while */
console.log("DO WHILE STATEMENT");
let index2=0;
do {
    console.log(index2);
    index2++;
} while (index2<10);


/* Sentencia foreach */
console.log("FOR EACH STATEMENT");
let arreglo = [1,2,3,4,5,6,7,8,9,10];
arreglo.forEach(element => {
    console.log(element);
});