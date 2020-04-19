document.addEventListener("DOMContentLoaded", function () {
  //Global and reference variables
  let currentWord = document.getElementById("currentWord"),
    instructionText = document.getElementById("instructions-text"),
    remainingGuess = document.getElementById("remainingGuesses-text"),
    lettersUsedText = document.getElementById("lettersUsed"),
    winsText = document.getElementById("wins");
  losesText = document.getElementById("loses");

  //Game object
  const game = {
    wordBank: {
      allen: {
        hint: "Allen hint",
        poster: "https://via.placeholder.com/150x200",
      },
      cameron: {
        hint: "cameron hint",
        poster: "https://via.placeholder.com/150x200",
      },
      hitchcock: {
        hint: "hitchcock hint",
        poster: "https://via.placeholder.com/150x200",
      },
      scorese: {
        hint: "scorese hint",
        poster: "https://via.placeholder.com/150x200",
      },
      spielberg: {
        hint: "spielberg hint",
        poster: "https://via.placeholder.com/150x200",
      },
      tarantino: {
        hint: "tarantino hint",
        poster: "https://via.placeholder.com/150x200",
      },
    },

    wins: 0,
    loses: 0,
    startingGuesses: 0,
    remainingGuesses: 0,
    currentWordText: null,
    currentWordLetters: [],
    currentWordLettersGuessed: [],
    currentWordLettersUsed: [],

    // Game set-up
    setUp: function () {
      const myWords = Object.keys(this.wordBank);

      this.currentWordText =
        myWords[Math.floor(Math.random() * myWords.length)];

      this.currentWordLetters = this.currentWordText.split("");

      this.renderGameLetters();

      this.startingGuesses = this.currentWordLetters.length - 3;
      this.remainingGuesses = this.startingGuesses;
      remainingGuess.textContent = this.remainingGuesses;
    },

    // Game update after letter guess
    update: function (guess) {
      if (this.remainingGuesses === 1) {
        // show answer
        this.loses++;
        losesText.innerHTML = this.loses;
        this.restart();
      } else {
        // incorrect guess
        this.incorrectGuess(guess);
        // correct guess
        this.correctGuess(guess);
        // renderGameLetter
        this.renderGameLetters();
        // if win show answer and restart
        if (this.checkWin() === true) {
          this.restart();
        }
      }
    },

    incorrectGuess: function (guess) {
      if (
        this.currentWordLetters.indexOf(guess) === -1 &&
        this.currentWordLettersUsed.indexOf(guess) === -1
      ) {
        this.currentWordLettersUsed.push(guess);

        this.remainingGuesses--;
        remainingGuess.innerHTML = this.remainingGuesses;
        lettersUsedText.innerHTML = this.currentWordLettersUsed.join(", ");
      }
    },

    correctGuess: function (guess) {
      // check for solution
      for (let i = 0; i < this.currentWordLetters.length; i++) {
        if (
          guess === this.currentWordLetters[i] &&
          this.currentWordLettersGuessed.indexOf(guess) === -1
        ) {
          this.currentWordLettersGuessed.push(guess);
        }
      }
    },

    // Show Letters or blamks after gu
    renderGameLetters: function () {
      let gameLetters = "";
      for (let i = 0; i < this.currentWordLetters.length; i++) {
        if (
          this.currentWordLettersGuessed.indexOf(this.currentWordLetters[i]) !==
          -1
        ) {
          gameLetters += `${this.currentWordLetters[i]} `;
        } else {
          gameLetters += "_ ";
        }
      }
      currentWord.innerHTML = gameLetters;
    },

    checkWin: function () {
      let didWin = true;

      for (let i = 0; i < this.currentWordLetters.length; i++) {
        if (
          this.currentWordLettersGuessed.indexOf(this.currentWordLetters[i]) ===
          -1
        ) {
          didWin = false;
        }
      }

      if (didWin) {
        this.wins++;
        winsText.innerHTML = this.wins;
        return didWin;
      }

      return false;
    },

    restart: function () {
      // restart game

      lettersUsedText.innerHTML = "";
      this.currentWordText = null;
      this.currentWordLetters = [];
      this.currentWordLettersGuessed = [];
      this.currentWordLettersUsed = [];
      this.startingGuesses = 0;
      this.remainingGuesses = 0;

      this.setUp();
      this.renderGameLetters();
    },
  };

  // let myWord = this.wordBank[Math.floor(Math.random()*wordBank.length)];

  //call the game
  game.setUp();

  //Event listener
  document.onkeyup = function (event) {
    if (event.keyCode >= 49 && event.keyCode <= 90) {
      game.guessedLetter = event.key.toLowerCase();
      game.update(game.guessedLetter);
    }
  };
});
