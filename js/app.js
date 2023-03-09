//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

//variables   
const keys = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');

let missed = 0;
let overlay = document.querySelector('#overlay');


//array named phrases
//const phrases = ['butterfly', 'cat', 'igloo', 'tundra', 'kitchen'];




//return a random phrase from an array
// const getRandomPhraseAsArray = arr => {

// }

//adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }

//check if a letter is in the phrase
// const checkLetter = button => {

// }

//check if the game has been won or lost
// const checkWin = () => {

// }

//listen for the start game button to be pressed 
const btnReset = document.querySelector('.btn__reset');
btnReset.addEventListener('click', () => {
  overlay.style.display = 'none'; 
});


// const search = document.getElementById('search');
// search.addEventListener('keyup', e => {
//     let currentValue = e.target.value.toLowerCase();
//     let info = document.querySelectorAll('[data-caption]');

//     info.forEach(card => {
//         let text = card.getAttribute('data-caption');
//         if (text.toLowerCase().includes(currentValue)) {
//             card.parentNode.style.display = 'block';
//             console.log(currentValue);
//         } else {
//             card.parentNode.style.display = 'none';
//         }
//     });
// });

//listen for the on-screen keyboard to be clicked
// qwerty.addEventListener('click', e => {

// });











console.log(btnReset);





















})