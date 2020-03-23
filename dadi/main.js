// Gioco dei dadi, chi fa di più vince.




// chiedere di tirare un dado all'utente
alert ("tira un dado");

// numero uscito all'utente da 1-6
var numUtente = parseInt(prompt((Math.floor(Math.random() * 6 )+1)));

// tira il dado il pc
alert("il pc tira un dado");

// numero uscito al pc da 1-6
var numPc = parseInt(prompt((Math.floor(Math.random() * 6 )+1)));

// var vincitore
var vincitore;

console.log(numUtente, numPc);

if (numUtente > numPc){
  vincitore = "HAI VINTO!";
} else if (numUtente < numPc){
  vincitore = "HA VINTO IL PC";
} //else{
//   vincitore = numPc + "PAREGGIO, RIPROVATE!";
// }
console.log(vincitore);

// output vincitore
document.getElementById('dadi').innerHTML = vincitore;
