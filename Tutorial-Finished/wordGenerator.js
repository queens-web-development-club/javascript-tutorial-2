
var wordArray = ["Develop","Innovate","Learn","Create"]; // Create Array with buzzwords
var wordIndex = 0; // Start at the first word in the array
var displayWord = wordArray[wordIndex]; // display the first word
var stateChange = 0;
var wordIncrement = -1; // variable that controls wether the word is being generated or deleted
const wordTime = 2000;
const changeWordTime = 250;
setTimeout(alterDisplayWord,wordTime); // Set the first time delay
updateWord(); // set the display word in the span element


/*
    Generates or deletes the display word letter by letter depending on the state.
*/
function alterDisplayWord(){
    if(stateChange == 0){ // if the word is in the process of being deleted or generated
	
        displayWord = wordArray[wordIndex].substring(0,displayWord.length+wordIncrement); // add a letter or delete a letter from the display word
        
		if(wordArray[wordIndex] == displayWord || displayWord.length == 0){ // if the word is fully generated or fully deleted
            stateChange = 1; // let the next function call know about the change in state
        }
		
        setTimeout(alterDisplayWord,changeWordTime);// call the function again after a delay and update the display word on the website
        updateWord();
    }
    else{ // if the word has been fully deleted or generated
        
		stateChange = 0;
        
		if(displayWord.length == 0){ // if there is no word being displayed (this means that a word was just deleted)
            
            // move to the next word
            if(wordIndex == wordArray.length-1)
			     wordIndex = 0;
            else
                wordIndex++;
            
            wordIncrement = 1; // change to the generating word increment
            setTimeout(alterDisplayWord,changeWordTime); // set a short time for the next call of the function
        
		}
        else{ // when the word has been fully generated
            
			wordIncrement = -1; // change to the deleting state
            setTimeout(alterDisplayWord,wordTime); // display the word for a longer time before calling the function again
        
		}
    }
}

function updateWord(){

    document.getElementById("Changing-Text").innerHTML = displayWord;

}