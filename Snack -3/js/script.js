// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//
// function miaFunzione (array,a,b){
//
// const nuovoArray = [];
//
// arrayN.forEach((element, i, array) => {
//   if (i >= a && i <= b) {
//      nuovoArray.push(array[i]);
//   }
//
// }
// );
// console.log(arrayN);
// console.log(nuovoArray);
//
// const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
//
// const risultato = miaFunzione(arrayN,0,2);
//
//
// // for (let i = 0; i < array.length; i++) {
// //   if (i >= a && i <= b) {
// //      nuovoArray.push(array[i]);
// //   }
// // }
// // return nuovoArray;
// }
// // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


// var filterN = arrayN.filter((element,a,b)=>{
//   return element>= 0 && element <= 2
// });
// const risultato = miaFunzione(arrayN,0,2);
// console.log(filterN);

const arrayN = ["rosso", "blu", "verde", "giallo", "bianco"];
var min = 2;
var max = 5;
const arrayFilter = arrayN.filter((element,index)=>{
return min<= index && max >= index;
});

console.log(arrayFilter);

// ridotta
// const arrayFilter = arrayN.filter((element,index)=> min<= index && max >= index);

// var new = filter(name, min, max);
//
// function filter(name, min, max){
//   return new.slice(arrayN,0,2)
// }

// const somma =()=> 1+2;
//
// // function somma(){
// //   return 1+1;
//
// const result = somma();
// console.log(result);
