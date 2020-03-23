// Gioco dei dadi, chi fa di più vince.



// numero uscito all'utente da 1-6
var numUtente = (Math.floor(Math.random() * 6 )+1);

// numero uscito al pc da 1-6
var numPc = (Math.floor(Math.random() * 6 )+1);

// var vincitore
var vincitore;

// chiedere di tirare un dado all'utente
alert ("tira un dado");

alert(numUtente);

// tira il dado il pc
alert("il pc tira un dado");

alert(numPc);

console.log(numUtente, numPc);

if (numUtente > numPc){
  vincitore = "HAI VINTO!";
} else if (numUtente < numPc){
  vincitore = "HA VINTO IL PC";
} else{
   vincitore = "AVETE PAREGGIATO, RIPROVATE!";
}
console.log(vincitore);

// output vincitore
document.getElementById('dadi').innerHTML = vincitore;
