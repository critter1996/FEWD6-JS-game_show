//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

//variables   
const keys = document.querySelector('#qwerty');
let phrase = document.querySelector('#phrase');
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
  'Rain clouds', 
  'Cats are cool', 
  'Wild goose chase', 
  'In a pickle', 
  'Later gator'
];


//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    return arr[Math.floor(Math.random()*arr.length)];
    }


//call the above function
getRandomPhraseAsArray(phrases);

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

//adds the letters of a string to the display
function addPhraseToDisplay(arr){
  // do stuff any arr that is passed in, and add to `#phrase ul`
  let letters = '';
  for ( let i = 0; i < arr.length; i++ ) {
    letters += `<li>${ arr[i] }</li>`;

  }
  return letters;
}
document.querySelector('#phrase').innerHTML = `<ul>${addPhraseToDisplay(phraseArray)}</ul>`;





// phrases.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// })


//return a random phrase from an array
// const getRandomPhraseAsArray = arr => {

// }


//check if a letter is in the phrase
// const checkLetter = button => {

// }

//check if the game has been won or lost
// const checkWin = () => {

// }




//listen for the on-screen keyboard to be clicked
// keys.addEventListener('click', () => {
//this is a function
// });






})