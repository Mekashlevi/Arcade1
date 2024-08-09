// Function to start the guessing game
function startGuessingGame() {
    playGame(guessingGame); // Calls the playGame function and passes the guessingGame function as an argument
}

// Function to start the oracle game
function startOracleGame() {
    playGame(oracleGame); // Calls the playGame function and passes the oracleGame function as an argument
}

// Function to start the Bear, Ninja, Hunter game
function startBnhGame() {
    playGame(bnhGame); // Calls the playGame function and passes the bnhGame function as an argument
}

// Function to start the Even/Odd game
function startEvenOddGame() {
    playGame(evenOddGame); // Calls the playGame function and passes the evenOddGame function as an argument
}

// Main function to handle the game loop
function playGame(gameFunction) {
    let continuePlaying = true; // Flag to control the loop, set to true initially

    // While loop that continues as long as continuePlaying is true
    while (continuePlaying) {
        hideGameSelectionButtons(); // Hide game selection buttons when a game starts
        gameFunction(); // Call the specific game function passed as an argument

        // Ask the user if they want to keep playing the same game
        continuePlaying = confirm("Would you like to keep playing this game?");

        if (!continuePlaying) { // If the user chooses to stop playing
            showGameSelectionButtons(); // Show game selection buttons

            // Reset scores if the user stops playing the Even/Odd or BNH game
            if (gameFunction === evenOddGame) {
                evenOddWins = 0;
                evenOddLosses = 0;
            } else if (gameFunction === bnhGame) {
                bnhWins = 0;
                bnhLosses = 0;
                bnhTies = 0;
            }
        }
    }
}

// Function to show all game selection buttons
function showGameSelectionButtons() {
    // Array of button IDs to show
    const buttonIds = ['guessingGameBtn', 'oracleGameBtn', 'bnhGameBtn', 'evenOddGameBtn'];

    // Loop through each button ID and set its display to 'block' to make it visible
    buttonIds.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.style.display = 'block'; // Display each button
        }
    });
}

// Function to hide all game selection buttons
function hideGameSelectionButtons() {
    // Array of button IDs to hide
    const buttonIds = ['guessingGameBtn', 'oracleGameBtn', 'bnhGameBtn', 'evenOddGameBtn'];

    // Loop through each button ID and set its display to 'none' to hide it
    buttonIds.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.style.display = 'none'; // Hide each button
        }
    });
}

// Expose the start game functions to the global scope so they can be accessed by HTML buttons
window.startGuessingGame = startGuessingGame;
window.startOracleGame = startOracleGame;
window.startBnhGame = startBnhGame;
window.startEvenOddGame = startEvenOddGame;
