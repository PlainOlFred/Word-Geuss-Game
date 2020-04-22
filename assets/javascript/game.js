document.addEventListener("DOMContentLoaded", function () {
  //Global and reference variables
  const currentWord = document.getElementById("currentWord"),
    instructionText = document.getElementById("instructions-text"),
    remainingGuess = document.getElementById("remainingGuesses-text"),
    lettersUsedText = document.getElementById("lettersUsed"),
    winsText = document.getElementById("wins");
    losesText = document.getElementById("loses");
    // modals
    answerModalLabel = document.getElementById('answerModalLabel')
    answerModalText = document.getElementById('answer-modal-text')
    answerModalImage = document.getElementById('answer-modal-image');

  //Game object
  const game = {
    wordBank: {
      allen: {
        text: 'ALLEN',
        hint: "Real first name is Heywood",
        poster: "./assets/images/allen.jpeg",
      },
      cameron: {
        text: 'CAMERON',
        hint: "Deep Sea Diver",
        poster: "./assets/images/cameron.jpeg",
      },
      hitchcock: {
        text: 'HITCHCOCK',
        hint: "Black and White Horror",
        poster: "./assets/images/hitchcock.jpeg",
      },
      scorese: {
        text: 'SCORSESE',
        hint: "Embraces Italian-American Heritage",
        poster: "./assets/images/scorsese.jpeg",
      },
      spielberg: {
        text: 'SPIELBERG',
        hint: "duunnn dunnn... duuuunnnn duun... duuunnnnnnnn dun ",
        poster: "./assets/images/spielberg.jpeg",
      },
      tarantino: {
        text: 'TARANTINO',
        hint: "90's non-linear director",
        poster: "./assets/images/tarantino.jpeg",
      },
    },

    wins: 0,
    loses: 0,
    startingGuesses: 0,
    remainingGuesses: 0,
    currentWord: null,
    currentWordLetters: [],
    currentWordLettersGuessed: [],
    currentWordLettersUsed: [],

    // Game set-up
    setUp: function () {
      const myWords = Object.keys(this.wordBank);

      this.currentWord =
        myWords[Math.floor(Math.random() * myWords.length)];

      this.currentWordLetters = this.currentWord.split("");

      this.renderGameLetters();

      this.startingGuesses = this.currentWordLetters.length - 3;
      this.remainingGuesses = this.startingGuesses;
      remainingGuess.textContent = this.remainingGuesses;

      document.getElementById('hint-modal-text').textContent = this.wordBank[this.currentWord].hint
    },

    // Game update after letter guess
    update: function (guess) {
      if (this.remainingGuesses === 1) {
        // show answer
        this.loses++;
        losesText.textContent = this.loses;
        answerModalLabel.textContent = 'You Lose';
        answerModalText.textContent = `Correct Answer: ${this.wordBank[this.currentWord].text}`;
        $('#answerModal').modal();
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
        remainingGuess.textContent = this.remainingGuesses;
        lettersUsedText.textContent = this.currentWordLettersUsed.join(", ");
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
      currentWord.textContent = gameLetters;
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
        answerModalLabel.textContent = 'You Win';
        answerModalText.textContent = `Correct Answer: ${this.wordBank[this.currentWord].text}`
        answerModalImage.setAttribute('src',this.wordBank[this.currentWord].poster )
        $('#answerModal').modal();

        winsText.textContent = this.wins;
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
