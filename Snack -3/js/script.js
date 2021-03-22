// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// // // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


// prima versione for each
// function miaFunzione (array,a,b){
// arrayN.forEach((element, i, array) => {
//   if (i >= a && i <= b) {
//      nuovoArray.push(array[i]);
//   }
// });
// }
//
// const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
// const nuovoArray = [];
// const risultato = miaFunzione(arrayN,0,2);
//
// console.log(arrayN);
// console.log(nuovoArray);
// fine


// versione tradizionale
// function intervallo(array, a, b){
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i >= a && i <= b) {
//        newArray.push(array[i]);
//     }
// }
// return newArray;
// }
// const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
// const risultato = intervallo(arrayN,0,2);
// console.log(risultato);
// fine


// versione arrayFilter
// const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
//
// function miaFunzione (array,a,b){
//   return arrayN.filter((element,i)=> i>= a && i <= b);
// }
// const risultato = miaFunzione(arrayN,0,2);
// console.log(risultato);
// fine


// versione filter con numeri
const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
var min = 2;
var max = 5;
const arrayFilter = arrayN.filter((element,index)=>{
return min<= index && max >= index;
});

console.log(arrayFilter);
