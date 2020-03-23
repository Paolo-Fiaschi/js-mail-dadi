// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato


// array delle emailList
var emailList = ["mario.rossi@gmail.com", "m.rossi@gmail.com", "m.r.@gmail.com", "rossi.m.@gmail.com"];

// chiedere all'utente di inserire la email
var emailUtente = prompt("Inserisci la tua email");

// var email check
var emailTrovata;


console.log(emailList);

console.log(emailUtente);

// check della corrispondenza delle email
for (var i = 0; i < emailList.length; i++){

  console.log(emailList[i]);

  if (emailList[i] == emailUtente) {
    i > emailList.length;
    emailTrovata = emailUtente + " si";
  }
  // else {
  //  emailTrovata = emailUtente + " errore";
  // }
console.log(emailUtente == emailList[i]);

}

// for (var j = 0; j < emailList.length; i++){
//
//   console.log(emailList[j]);
//
//   if (emailList[j] !== emailUtente) {
//     emailTrovata = emailUtente + " errore";
//   }
//   // else {
//   //  emailTrovata = emailUtente + " errore";
//   // }
// console.log(emailUtente !== emailList[j]);
//
// }




// if (emailList[i] !== emailUtente){
//   emailTrovata = emailUtente + " errore";
//  }

// output emailCheck se presente nella lista
document.getElementById('mail').innerHTML = emailTrovata;
