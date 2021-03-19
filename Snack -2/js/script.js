// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// creo array oggetti
// var squadre = [
//   {
//     nome: "Atalanta",
//     punti: 0,
//     falli : 0,
//   },
//   {
//     nome: "Roma",
//     punti: 0,
//     falli : 0,
//   },
//   {
//     nome: "Benevento",
//     punti: 0,
//     falli : 0,
//   },
// ];
// // 2 step:
// // Generare numeri random al posto degli 0 nelle proprietà:
// // Punti fatti e falli subiti.
// // creo una variabile fuori dove prendo l'indice dell'objt
//
// // var squadre[i];
// for (var key in squadre) {
//   console.log([key]);
//   console.log(squadre[key].punti, squadre[key].falli)
//
//   if (squadre[key].punti == 0) {
//     squadre[key].punti = randomGeneratore(1, 10);
//   }
//   if (squadre[key].falli == 0) {
//     squadre[key].falli = randomGeneratore(1, 10);
//   }
// }
// for (var i = 0; i < squadre.length; i++) {
//   console.log(squadre);
// }
//
//
// function randomGeneratore(min, max){
//   var numeriCpu = Math.floor(Math.random() * max) + 1;
//   return numeriCpu;
// }
// // 3 step:
// // Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// //
// var nuovoArray = [];
//
// for (var key in squadre) {
// nuovoArray.push(squadre[key].nome, squadre[key].falli)
// }
// console.log(nuovoArray);
