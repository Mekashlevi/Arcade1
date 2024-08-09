// Function for the guessing game
function guessingGame() {
    alert("Step right up to the Guessing Game! Try to guess the secret number between 1 and 10!");

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessCount = 0;
    const maxGuesses = 10;
    let userGuess = 0;

    while (guessCount < maxGuesses) {
        const input = prompt(`Guess a number between 1 and 10.\nYou have ${maxGuesses - guessCount} guesses left.`);

        if (input === null) {
            alert('Game over. Thanks for playing!');
            console.log("Guessing Game - Game over.");
            return;
        }

        userGuess = parseInt(input);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert('Please enter a valid number between 1 and 10.');
            continue;
        }

        guessCount++;
        if (userGuess > randomNumber) {
            alert('Your guess was too high, guess again.');
        } else if (userGuess < randomNumber) {
            alert('Your guess was too low, guess again.');
        } else {
            alert(`Congratulations! Your guess was correct. You guessed it right in ${guessCount} guesses!`);
            console.log(`Guessing Game - Correct guess in ${guessCount} attempts.`);
            return;
        }
    }

    alert(`Game Over! You've used all ${maxGuesses} guesses. The correct number was ${randomNumber}.`);
    console.log("Guessing Game - Game Over. Maximum guesses reached.");
}

window.startGuessingGame = function() {
    playGame(guessingGame);
};
