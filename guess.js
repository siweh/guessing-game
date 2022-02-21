let randomNumber = Math.ceil(Math.random() * 100);

let results = document.querySelector('.results');

let submitGuess = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

//results.innerHTML = randomNumber;
function guessedNumber() {
  let guessedValue = guessField.value;
  results.innerHTML = guessedValue;
  if (guessedValue < randomNumber) {
    results.innerHTML = 'Your guess is too low';
  } else if (guessedValue > randomNumber) {
    results.innerHTML = 'Your guess is too high';
  } else {
    results.innerHTML = `Correct, the secret number is ${randomNumber}`;
  }

  setTimeout(() => {
    results.innerHTML = '';
  }, 3000);
}
submitGuess.addEventListener('click', guessedNumber);
