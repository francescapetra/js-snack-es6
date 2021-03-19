// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
 // nome e peso. Stampare a schermo la bici con peso minore
const bike = [
  {
    nome: "Atala",
    peso: 5000,
  },
  {
    nome: "Maverick",
    peso: 8000,
  },
  {
    nome: "Fondriest",
    peso: 7000,
  },
];

// creo una variabile fuori dove prendo l'indice dell'objt
let lightBike = null;
// faccio cilare gli elementi
for (let i = 0; i < bike.length; i++) {
  console.log(bike[i]);
// se la chiave peso dell'oggetto bike[i] è inferiore alla ligthbike peso
  if (lightBike == null ||  lightBike.peso > bike[i].peso ) {
    // la bike ligth diventa questa
    lightBike = bike[i];
  }
}
const {nome,peso} = lightBike;
console.log(
`La bici più leggera è: ${nome} e pesa ${peso} `);
