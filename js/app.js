//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

//variables   
const keys = document.querySelector('#qwerty');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
let overlay = document.querySelector('#overlay');
let phrase = document.querySelector('#phrase');

//array named phrases
const phrases = [
  'Rain Clouds', 
  'Cats are Cool', 
  'Wild Goose Chase', 
  'In a Pickle', 
  'Later Gator'
];


//listen for the start game button to be pressed 
btnReset.addEventListener('click', () => {
  //restarts the game after win or lose

  overlay.style.display = 'none'; 

  if (btnReset.textContent === 'Start Over') {
    restart();
}});


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




//Listen for the on-screen keyboard to be clicked
 keys.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let key = e.target;
    key.classList.add('chosen');
    key.setAttribute('disabled', '');
    //key.disabled = true;
    let letterFound = checkLetter(key);
    
    if (letterFound === null) {
      let tries = document.querySelectorAll('.tries img');
      tries[missed].src = 'images/lostHeart.png';
      missed++; 
    }

}
checkWin();
})

 //Each time the player guesses a letter, this function will check whether the game has been won or lost. 
const checkWin = () => {
  let letterAmnt = document.querySelectorAll('.letter');
  let shown = document.querySelectorAll('.show');
  let title = document.querySelector('.title');


  if ( letterAmnt.length === shown.length ) {
    //Display win overlay
    overlay.classList.add('win');
    title.textContent = 'Great Job! You Win!';
    overlay.style.display = 'flex';
    //Add start again button here
    btnReset.innerHTML = 'Start Over';
    // Otherwise, if the number of misses is equal to or
   //greater than 5, show the overlay screen with the “lose” class and appropriate text.
  } else if ( missed > 4 ) {
    overlay.classList.add('lose');
    title.textContent = 'Sorry, you lost!';
    overlay.style.display = 'flex';
    //add start again button here
    btnReset.innerHTML = 'Start Over';
  }
};


function restart() {

 phrase.textContent = '';

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


  document.querySelectorAll('.chosen').forEach(element => {
      element.disabled = false;
      element.classList.remove('chosen');
  });
  let tries = document.querySelectorAll('.tries img');
  for (let i = 0; i < tries.length; i++) {
      tries[i].src = 'images/liveHeart.png';
      tries[i].classList.remove('missed');
      tries[i].classList.add('tries');
  }
  missed = 0;

  
};


//End of wrap
});
