const wordBank = {
    1: "Jeremy",
    2: "Matthew",
    3: "Jones",
};

//variable
let wins = 0;
let loses = 0;
let remainingGuess = 10;
let lettersGuessed = [];
let myWord = 'jeremy';

//initalize gameboard update currentWord






//word = jeremy
if (myWord === 'jeremy'){
    //turn word into a array
    let myArray = ['_', '_', '_', '_', '_','_'];
    //Event listener
    document.onkeyup = function (event){
        let userGuess = event.key;
    
        if(userGuess === 'j'){
            myArray[0] = 'j';
            
        };
        if(userGuess === 'e'){
            myArray[1] = 'e';
            myArray[3] = 'e';  
        };

        if(userGuess === 'r'){
            myArray[2] = 'r';   
        };

        if(userGuess === 'm'){
            myArray[4] = 'm';   
        };
        if(userGuess === 'y'){
            myArray[5] = 'y';   
        };
        console.log(myArray);
    
    

    };

    
};

//endgame
if (remainingGues = 0){
    //end game
}