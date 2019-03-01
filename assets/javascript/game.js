var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var compThinking = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(
  "real psychic's see into the crystal ball of the console:" + compThinking
);

// variables for display elements
var w = document.getElementById("wins");
var l = document.getElementById("losses");
var x = document.getElementById("guessleft");
var g = document.getElementById("lettersguessed");

// varaiables for gameplay
var myWins = 0;
var myLosses = 0;
var guessesLeft = 9;
var triedLetters = [];
// k= 1 triggers reset
var k = 0;

function reset() {
  guessesLeft = 9;
  triedLetters = [];
  k = false;
  g.innerText = triedLetters.join();
  x.innerText = guessesLeft;
}
w.innerText = myWins;
l.innerText = myLosses;

// gameplayevent
document.onkeyup = function(event) {
  var myGuess = event.key;
  console.log("game change ", myGuess);

  //   need to validate alphebetical only

  // "a psychic would know to use lower case letters"

  //   its hard to convince me you are a psychic if you cant even remember the past

  triedLetters.push(myGuess);
  g.innerText = triedLetters.join();

  //   testforwinning
  if (myGuess == compThinking) {
    myWins++;
    w.innerText = myWins;
    if (myWins == 9) {
      alert(
        "You are a confirmed psychic, so you know this next site is worth the $$$!"
      );
      // boot them
    } else {
      k = confirm("You win... maybe you're psychic...best of 17?");
      if (k == true) {
        reset();
      } else {
        alert("As a psychic, I already knew you couldn't handle this!");
        // send them to another page
      }
    }
  } else {
    guessesLeft--;
    x.innerText = guessesLeft;
    // testforlosing
    if (guessesLeft == 0) {
      myLosses++;
      l.innerText = myLosses;
      if (myLosses == 9) {
        alert("A psychic would never get the worst of 17. Get Lost!");
        // I want to kick them off the page here to a "real" psychic.
      } else {
      }
      k = confirm("you lose...but maybe you're psychic...best of 17?");
      if (k == true) {
        reset();
      } else {
        alert("strange... you are psychic enough to know you're no psychic...");
        //   boot them to a real psychic
      }
    }
  }
};
