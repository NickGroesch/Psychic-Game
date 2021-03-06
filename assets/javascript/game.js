document.addEventListener("DOMContentLoaded", function() {
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
    "real psychics see into the crystal ball of the console:" + compThinking
  );

  // variables for display elements
  var w = document.getElementById("wins");
  var l = document.getElementById("losses");
  var x = document.getElementById("guessleft");
  var g = document.getElementById("lettersguessed");
  var f = document.getElementById("feedback");

  // varaiables for gameplay
  var myWins = 0;
  var myLosses = 0;
  var guessesLeft = 9;
  var triedLetters = [];

  function masterReset() {
    myWins = 0;
    myLosses = 0;
    guessesLeft = 9;
    triedLetters = [];
    w.innerText = myWins;
    l.innerText = myLosses;
    g.innerText = triedLetters.join();
    x.innerText = guessesLeft;
    compThinking = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(
      "real psychics see into the crystal ball of the console:" + compThinking
    );
  }

  function reset() {
    guessesLeft = 9;
    triedLetters = [];
    k = false;
    g.innerText = triedLetters.join();
    x.innerText = guessesLeft;
    compThinking = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(
      "real psychics see into the crystal ball of the console:" + compThinking
    );
  }
  w.innerText = myWins;
  l.innerText = myLosses;

  // gameplayevent
  document.onkeyup = function(event) {
    var myGuess = event.key;

    // input validator
    var myAscii = event.keyCode;
    if (myAscii <= 90 && myAscii >= 65) {
      myAscii = myAscii + 32;
    }

    if (!(myAscii == 16) && !(myAscii >= 97 && myAscii <= 122)) {
      f.innerText = "a psychic would know to use lower case letters";
    }
    myGuess = String.fromCharCode(myAscii);
    // for duplicate guess
    if (triedLetters.indexOf(myGuess) >= 0) {
      f.innerText =
        "it's hard to convince me you are a psychic when you can't even see the past";
    }
    // print the guess
    triedLetters.push(myGuess);
    g.innerText = triedLetters.join();

    //   testforwinning
    if (myGuess == compThinking) {
      myWins++;
      w.innerText = myWins;
      if (myWins == 9) {
        f.innerText = "You are a confirmed psychic! but play again.";
        masterReset();
      } else {
        f.innerText = "You win... maybe you're psychic...best of 17!";

        reset();
      }
    } else {
      guessesLeft--;
      x.innerText = guessesLeft;
      // testforlosing
      if (guessesLeft == 0) {
        myLosses++;
        l.innerText = myLosses;
        if (myLosses == 9) {
          f.innerText =
            "A psychic would never get the worst of 17. play again!";
          masterReset();
        } else {
          f.innerText = "you lose...but maybe you're psychic...best of 17!";
          reset();
        }
      }
    }
  };
});
