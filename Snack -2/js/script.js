// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e
//stampiamo tutto in console.
// creo array oggetti
const squadre = [
  {
    nome: "Atalanta",
    punti: 0,
    falli : 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falli : 0,
  },
  {
    nome: "Benevento",
    punti: 0,
    falli : 0,
  },
];
const {nome,punti,falli} = squadre;
console.log(squadre);
//function
function randomGeneratore(min, max){
  let numeriCpu = Math.floor(Math.random() * max) + 1;
  return numeriCpu;
}
// ciclo
const nuoveSquadre = squadre.map((element,index) =>{
  element.punti = randomGeneratore(0,5);
  element.falli = randomGeneratore (0,10);
  const {nome,falli} = element; 
  return {nome,falli};
});
console.log(nuoveSquadre);


// primo metodo
// for (let i = 0; i < squadre.length; i++) {
//   squadre[i].punti = randomGeneratore(1,10);
//   squadre[i].falli = randomGeneratore(1,10);
// }
// // nuovoArray
// const nuovoArray = [];
//
// for (let i = 0; i < squadre.length; i++) {
//
// const {nome,falli} = squadre[i];
// nuovoArray.push({
//   nome: nome,
//   falli :falli,
// });
// }
// console.log(nuovoArray);
