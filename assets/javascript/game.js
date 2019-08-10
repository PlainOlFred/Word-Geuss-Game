document.addEventListener('DOMContentLoaded', function(){
    
    const wordBank = ["jeremy", "matthew", "jones"];
    
    //variable
    let wins = 0;
    let loses = 0;
    let guesses = 10;
    let lettersGuessed = [];
    let letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let blankWord = '\_'; //to test wins
    // let myWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    let myWord = 'jeremy';
    
    //referance variables
    let instructionText = document.getElementById('instructions-text');
    let currentWord = document.getElementById('currentWord');
    let remainingGuess =document.getElementById('remainingGuesses-text');
    let winsText = document.getElementById('wins');
    let losesText = document.getElementById('loses');
    let lettersUsedText = document.getElementById('lettersUsed');

    //display score board
    winsText.textContent = 'Wins: ';
    losesText.textContent = 'Loses: ';
    remainingGuess.textContent = 'Guesses Remaining: ' + guesses;

    
    
    
    //word = jeremy
    if (myWord === 'jeremy'){
        //turn word into a array
        let myArray = ['\_', '\_', '\_', '\_', '\_','\_'];
        currentWord.textContent = myArray.join(' ');

        
        
         
    
    
        //Event listener
        document.onkeyup = function (event){
            let userGuess = event.key;
            
            
            if(letterBank.includes(userGuess)){
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
                    lettersGuessed.push(userGuess);
                    guesses--; //add if for if ! in letterguessed
                    
                
                    letterBank.splice(letterBank.indexOf(userGuess),1);
                    console.log(letterBank)
                    
                    
                }


            }
                
        



            currentWord.textContent = myArray.join(' ');
            instructionText.style.color= 'white';
            remainingGuess.textContent = 'Guesses Remaining: ' + guesses; 
            winsText.textContent = 'Wins: ' + wins;
            losesText.textContent = 'Loses: ' + loses;
            lettersUsedText.textContent = lettersGuessed.join(' ');
            

            
            
        };


    
        
    };
    
    
        
    
    
    //endgame
    if (remainingGues = 0){
        //end game
    }
    });