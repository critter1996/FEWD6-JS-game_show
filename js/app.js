//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

//variables   
const keys = document.querySelector('#qwerty');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
let overlay = document.querySelector('#overlay');
let phraseList = document.querySelector('#phraseList')

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
    let thisPhrase = arr[Math.floor(Math.random()*arr.length)];
    thisPhrase = thisPhrase.split('');
    return thisPhrase;
};


//call the above function
getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);


//adds the letters of a string to the display
function addPhraseToDisplay(arr){
  // do stuff any arr that is passed in, and add to `#phrase ul`
  
  
  for ( let i = 0; i < arr.length; i++ ) {
    let newLi = document.createElement('li');
    newLi.textContent = arr[i];
    //ul append li (add li to ul)
    phraseList.append('newLi');

    //if arr contains 'spaces' then add class .space else add class .letter; then append each new li to ul
    if (newLi.textContent !== ' ') {
      //add class .space
     newLi.classList.add('space');
     
    } else {
      //add class .letter
      newLi.classList.add('letter');
    };

  };
  return li;
};

document.querySelector('#phrase').innerHTML = `<ul>${addPhraseToDisplay(phraseArray)}</ul>`;

addPhraseToDisplay(phraseArray); 




//check if a letter is in the phrase
function checkLetter(button) {
let letters = document.getElementsByClassName('.letter');
let match = null;
for (let i = 0; i < letters.length; i++) {
  if (letters[i].textContent === button.textContent) {
    match = button.textContent;
    match.classList.add('show');
}
return match;
}
};




keys.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    let key = e.target;
    key.classList.add('chosen');
    key.disabled = true;
    let letterFound = checkLetter(button);
    if (letterFound = null) {
      let tries = document.querySelector('.tries');
      
    }
}});




//check if the game has been won or lost
// const checkWin = () => {

// }








})