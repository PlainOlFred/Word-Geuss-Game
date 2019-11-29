document.addEventListener('DOMContentLoaded', function(){

    //Global and reference variables
    let 
        currentWord = document.getElementById('currentWord'),
        instructionText = document.getElementById('instructions-text'),
        remainingGuess = document.getElementById('remainingGuesses-text'),
        lettersUsedText = document.getElementById('lettersUsed'),
        winsText = document.getElementById('wins');
    //Game object
    let game = {
        wordBank: ['ALLEN', 'CAMERON', 'HITCHCOCK', 'SCORESE', 'SPIELBERG','TARANTINO'],
        wins: 0,
        myWord: null,
        currentWord: [],
        remainingGuesses: 0,
        lettersUsed: [],

        


        setUp: function() {
            
            this.myWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
            console.log(this.myWord)

            this.displayBlanks(this.myWord);
            this.restart();

            this.remainingGuesses = this.myWord.length + 2;
            remainingGuess.textContent = this.remainingGuesses;

        },
       

        update: function(guess) {
            
            if (this.remainingGuesses > 1) {

                if(this.myWord.includes(guess.toUpperCase())) {

                   
                    this.showletters(guess.toUpperCase());


                } else{

                    this.lettersUsed.push(guess);
                    lettersUsedText.textContent = this.lettersUsed;
                    this.remainingGuesses --;

                    remainingGuess.textContent = this.remainingGuesses;
                }
            
            } else {
                //restart game
                
                this.setUp();
            }

        },
        

        displayBlanks: function(word) {
          
            
            for(let i =0; i < word.length ; i++){
                this.currentWord[i] = '\_'
            }
            
            currentWord.textContent= this.currentWord
        },
        showletters: function(letter) {
            
            for(let blank in this.myWord.split('')) {
              
                if (this.myWord.split('')[blank] === letter) {
                    console.log(letter)
                    console.log(blank)
                    this.currentWord[blank] = letter

                }
                
       
            }
            currentWord.textContent= this.currentWord

        },

        restart: function() {
            this.lettersUsed = [];
            lettersUsedText.textContent = this.lettersUsed;


        }
    }

    
    // let myWord = this.wordBank[Math.floor(Math.random()*wordBank.length)];
   

   //call the game
    game.setUp();


    //Event listener
    document.onkeyup = function (event){
        guess = event.key.toLowerCase();
        game.update(guess);          
    };
       
              
           
            


             
            
        

    
});











