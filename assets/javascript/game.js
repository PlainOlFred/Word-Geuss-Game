document.addEventListener('DOMContentLoaded', function(){
    
    const wordBank = ['ALLEN', 'CAMERON', 'HITCHCOCK',"SCORESE", 'SPIELBERG','TARANTINO'];
    let myWord = wordBank[Math.floor(Math.random()*wordBank.length)];
    
    //reference variables
    let instructionText = document.getElementById('instructions-text');
    let currentWord = document.getElementById('currentWord');
    let remainingGuess =document.getElementById('remainingGuesses-text');
    let lettersUsedText = document.getElementById('lettersUsed');
    let winsText = document.getElementById('wins');
    let losesText = document.getElementById('loses');
    
    
    
    let myArray=[];
    for(let i =0; i<myWord.length ; i++){
         myArray[i]='\_'
     }
     console.log(myArray)
     currentWord.textContent= myArray.join(' ')

    
    //variable
    let wins = 0;
    let loses = 0;
    let guesses = myWord.length;

    let lettersGuessed = [];
    let letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let blank = '\_'; //to test wins

    
    
   

    //display score board
    winsText.textContent = 'Wins: 0';
    losesText.textContent = 'Loses: 0';
    remainingGuess.textContent = 'Guesses Remaining: ' + guesses;

    function newWord(){
        myWord = wordBank[Math.floor(Math.random()*wordBank.length)];
        guesses =myWord.length;
        myArray = [];
        lettersGuessed = [];
        for(let i =0; i<myWord.length ; i++){
            myArray[i]='\_'
        }
        instructionText.style.color= 'green';
        instructionText.textContent = 'Press Enter for a New Word'
        
    }
    
   
    
    //Event listener
    document.onkeyup = function (event){
        instructionText.style.color= 'white';
        
        let userGuess = event.key;
            //myWord is ALLEN
            if (myWord === 'ALLEN'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 'a'){
                        myArray[0] = 'A';
                    } else if(userGuess === 'l'){
                        myArray[1] = 'L';
                        myArray[2] = 'L';  
                    } else if(userGuess === 'e'){
                        myArray[3] = 'E';   
                    } else if(userGuess === 'n'){
                        myArray[4] = 'N';   
                    }else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }       
            };
            //myWord is CAMERON
            if (myWord === 'CAMERON'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 'c'){
                        myArray[0] = 'C';  
                    } else if(userGuess === 'a'){
                        myArray[1] = 'A'; 
                    } else if(userGuess === 'm'){
                        myArray[2] = 'M';   
                    } else if(userGuess === 'e'){
                        myArray[3] = 'E';   
                    } else if(userGuess === 'r'){
                        myArray[4] = 'R';   
                    } else if(userGuess === 'o'){
                        myArray[5] = 'O';   
                    } else if(userGuess === 'n'){
                        myArray[6] = 'N';   
                    } 
                    else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }
            };
            //myWord is HITCHCOCK
            if (myWord === 'HITCHCOCK'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 'h'){
                        myArray[0] = 'H';
                        myArray[4] = 'H';  
                    } else if(userGuess === 'i'){
                        myArray[1] = 'I'; 
                    } else if(userGuess === 't'){
                        myArray[2] = 'T';   
                    } else if(userGuess === 'c'){
                        myArray[3] = 'C';  
                        myArray[5] = 'C'; 
                        myArray[7] = 'C';  
                    } else if(userGuess === 'o'){
                        myArray[6] = 'O';   
                    } else if(userGuess === 'k'){
                        myArray[8] = 'K';   
                    } 
                    else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }
            };
            //myWord is SCORESE
            if (myWord === 'SCORESE'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 's'){
                        myArray[0] = 'S';  
                        myArray[5] = 'S';
                    } else if(userGuess === 'c'){
                        myArray[1] = 'C'; 
                    } else if(userGuess === 'o'){
                        myArray[2] = 'O';   
                    } else if(userGuess === 'r'){
                        myArray[3] = 'R';  
                    } else if(userGuess === 'e'){
                        myArray[4] = 'E'; 
                        myArray[6] = 'E';   
                    } else if(userGuess === 'o'){
                          
                    } 
                    else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }
            };
            //myWord is SPIELBERG
            if (myWord === 'SPIELBERG'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 's'){
                        myArray[0] = 'S';  
                    } else if(userGuess === 'p'){
                        myArray[1] = 'P'; 
                    } else if(userGuess === 'i'){
                        myArray[2] = 'I';   
                    } else if(userGuess === 'e'){
                        myArray[3] = 'E'; 
                        myArray[6] = 'E';  
                    } else if(userGuess === 'l'){
                        myArray[4] = 'L';   
                    } else if(userGuess === 'b'){
                        myArray[5] = 'B';   
                    } else if(userGuess === 'r'){
                        myArray[7] = 'R';   
                    } else if(userGuess === 'g'){
                        myArray[8] = 'G';   
                    } 
                    else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }
            };
            // myWord is TARANTINO
            if (myWord === 'TARANTINO'){
                if(letterBank.includes(userGuess)){
                    if(userGuess === 't'){
                        myArray[0] = 'T'; 
                        myArray[5] = 'T'; 
                    } else if(userGuess === 'a'){
                        myArray[1] = 'A'; 
                        myArray[3] = 'A'; 
                    } else if(userGuess === 'r'){
                        myArray[2] = 'R';   
                    } else if(userGuess === 'n'){
                        myArray[4] = 'N';  
                        myArray[7] = 'N'; 
                    } else if(userGuess === 'i'){
                        myArray[6] = 'I';   
                    } else if(userGuess === 'o'){
                        myArray[8] = 'O';   
                    } 
                    else{
                        lettersGuessed.push(userGuess.toUpperCase());
                        guesses--; //add if for if ! in letterguessed
                        letterBank.splice(letterBank.indexOf(userGuess),1);// removes letter from letterBank 
                    }
                }
            };
       
            //update after every click
            currentWord.textContent = myArray.join(' ');
            remainingGuess.textContent = 'Guesses Remaining: ' + guesses; 
            lettersUsedText.textContent = lettersGuessed.join(' ');




             //Endgame
            if(guesses <1 && myArray.includes(blank)){
                alert('You Lose')
                loses++;
                newWord();
                console.log('you lose' + loses);
                console.log('my word after losses' + myWord);
                losesText.textContent = 'Loses: ' + loses;
            } 

            if(!myArray.includes(blank)){
                // alert('You Win')
                wins++;
                newWord();
                console.log('you win' + wins);
                console.log('my word after win' + myWord);
                winsText.textContent = 'Wins: ' + wins;


            }

            
           
            


             
            
        

    
    };

   
   


    //  //updates at endgam
    //  winsText.textContent = 'Wins: ' + wins;
    //  losesText.textContent = 'Loses: ' + loses;












});