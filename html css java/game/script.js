const targetNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        setMessage('Please enter a valid number between 1 and 10');
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        disableInputAndButton();
    } else {
        setMessage(`Wrong guess. Try again!`);
    }
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}
