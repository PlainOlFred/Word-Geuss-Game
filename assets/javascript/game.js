document.addEventListener('DOMContentLoaded', function(){
const wordBank = ["jeremy", "matthew", "jones"];

//variable
let wins = 0;
let loses = 0;
let guesses = 10;
let lettersGuessed = [];
// let myWord = wordBank[Math.floor(Math.random()*wordBank.length)];
let myWord = 'jeremy';

//referance variables
let instructionText = document.getElementById('instructions-text');
let currentWord = document.getElementById('currentWord');
let remainingGuess =document.getElementById('remainingGuesses-text');



//word = jeremy
if (myWord === 'jeremy'){
    //turn word into a array
    let myArray = ['\_', '\_', '\_', '\_', '\_','\_'];
    currentWord.textContent = myArray.join(' ');
    remainingGuess.textContent = 'Guesses Remaining: ' + guesses; 


    //Event listener
    document.onkeyup = function (event){
        let userGuess = event.key;
    
        if(userGuess === 'j'){
            myArray[0] = 'j';
            
        } else if(userGuess === 'e'){
            myArray[1] = 'e';
            myArray[3] = 'e';  
        } else if(userGuess === 'r'){
            myArray[2] = 'r';   
        } else if(userGuess === 'm'){
            myArray[4] = 'm';   
        }else if(userGuess === 'y'){
            myArray[5] = 'y';   
        }else{
            guesses--; //add if for if ! in letterguessed
        }

        currentWord.textContent = myArray.join(' ');
        instructionText.style.color= 'white';
        remainingGuess.textContent = 'Guesses Remaining: ' + guesses; 
        
        
    };

    
};


    


//endgame
if (remainingGues = 0){
    //end game
}
});