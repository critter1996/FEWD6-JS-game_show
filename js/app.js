//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

//variables   
const keys = document.querySelector('#qwerty');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
let overlay = document.querySelector('#overlay');
let phrase = document.querySelector('#phrase')


//listen for the start game button to be pressed 
btnReset.addEventListener('click', () => {
  overlay.style.display = 'none'; 
});

//array named phrases
const phrases = [
  'Rain Clouds', 
  'Cats are Cool', 
  'Wild Goose Chase', 
  'In a Pickle', 
  'Later Gator'
];


//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    let thisPhrase = phrases[Math.floor(Math.random()*phrases.length)];
    return thisPhrase.split('');
};


//adds the letters of a string to the display
function addPhraseToDisplay(arr){
    for ( let i = 0; i < arr.length; i++ ) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i];
        phrase.appendChild(newLi);

        if (arr[i] !== ' ') {
            newLi.classList.add('letter'); 
          } else {
            newLi.classList.add('space');
        };
    };
};

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);



//check if a letter is in the phrase
function checkLetter(button) {
let letters = document.querySelectorAll('.letter');
let match = null;
for (let i = 0; i < letters.length; i++) {
  if ( button.textContent === letters[i].textContent.toLowerCase()) {
    match = letters[i];
    match.classList.add('show');
}
}
return match;
};


 keys.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let key = e.target;
    key.classList.add('chosen');
    key.disabled = true;
    let letterFound = checkLetter(key);
    
    if (letterFound === null) {
      let tries = document.querySelectorAll('.tries img');
      tries[missed].src = 'images/lostHeart.png';
      missed++;


      
    }
}});

//Each time the player guesses a letter, this function will check whether the game has been won or lost. 
//At the very end of the keyboard event listener, you’ll run this function to check if the number 
//of letters with class “show” is equal to the number of letters with class “letters”. If they’re equal, 


//check if the game has been won or lost
const checkWin = () => {
  let letterAmnt = document.querySelectorAll('.letter');
  let shown = document.querySelectorAll('.show');

  if (shown === letterAmnt ) {
    //show the overlay screen with the “win” class and appropriate text. Display win overlay
    //Create the win overlay by adding the “win” class to the start overlay.
    //Change the headline text of the start overlay to show a person won.
    //Change the display property of the overlay to “flex”

  } else {
    // Otherwise, if the number of misses is equal to or
   //greater than 5, show the overlay screen with the “lose” class and appropriate text.
//    Check if the missed counter is greater than 4. If they are, display the lose
// overlay
// ❏ Create the lose overlay by adding the “lose” class to the start overlay.
// ❏ Change the headline text of the start overlay to show a person lost.
// ❏ Change the display property of the overlay to “flex”

  }
}


});
