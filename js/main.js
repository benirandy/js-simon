
var randomNumbers = [];
for (var i = 0; i < 5; i++) {
  var number = Math.floor(Math.random() * 10) + 1;
  randomNumbers.push(number);
}


document.write("Numeri da memorizzare: " + randomNumbers.join(", ") + "<br>");


setTimeout(function() {

  document.body.innerHTML = "";
  
  var guessedNumbers = [];
  for (var i = 0; i < 5; i++) {
    var guess = prompt("Inserisci uno dei numeri che hai visto prima:");
    guessedNumbers.push(parseInt(guess));
  }
  
  var correctNumbers = [];
  for (var i = 0; i < 5; i++) {
    if (randomNumbers.indexOf(guessedNumbers[i]) !== -1) {
      correctNumbers.push(guessedNumbers[i]);
    }
  }
  

  document.write("hai indovinato :" + correctNumbers.length + " dei numeri.<br>");
  

  if (correctNumbers.length > 0) {
    document.write("I numeri sono giusti: " + correctNumbers.join(", "));
  } else {
    document.write("Non hai indovinato il numero giusto.");
  }
}, 12000);
