let randomNumber = Math.ceil(Math.random() * 100);

let results = document.querySelector('.results');

let submitGuess = document.querySelector('.guessSubmit');
let newNumber = document.querySelector('.newNumber');
let guessField = document.querySelector('.guessField');
let error = document.querySelector('.error');

//results.innerHTML = randomNumber;
function guessedNumber() {
  let guessedValue = guessField.value;
  results.innerHTML = guessedValue;

  if (guessedValue < 1 || guessedValue > 100) {
    error.innerHTML = 'Please enter a number from 1 up to 100 only!';
    results.innerHTML = '';
  } else if (guessedValue < randomNumber) {
    results.innerHTML = 'Your guess is too low';
  } else if (guessedValue > randomNumber) {
    results.innerHTML = 'Your guess is too high';
  } else {
    results.innerHTML = `Correct, the secret number is ${randomNumber}`;
    randomNumber = Math.ceil(Math.random() * 100);
    newNumber.innerHTML = 'A new game started!';
    guessField.value = '';
  }

  setTimeout(() => {
    results.innerHTML = '';
    error.innerHTML = '';
    newNumber.innerHTML = '';
  }, 5000);
}
submitGuess.addEventListener('click', guessedNumber);
