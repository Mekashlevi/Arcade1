let evenOddWins = 0;
let evenOddLosses = 0;

// Function for the Even/Odd game
function evenOddGame() {
    alert("Welcome to the Even or Odd Challenge! Ready yourself for a thrilling test of luck and intuition!");

    while (true) {
        let playerChoice = prompt("Call 'even' or 'odd':");

        if (playerChoice === null) {
            alert('Game over. Thanks for playing!');
            return;
        }

        playerChoice = playerChoice.trim().toLowerCase();

        if (playerChoice !== "even" && playerChoice !== "odd") {
            alert("Invalid input. Please enter 'even' or 'odd'.");
            continue;
        }

        const number1 = Math.floor(Math.random() * 4) + 1;
        const number2 = Math.floor(Math.random() * 4) + 1;
        const sum = number1 + number2;
        const isEven = sum % 2 === 0;

        let resultMessage = "You chose " + playerChoice + ", the sum was " + sum + ", which is an " + (isEven ? "even" : "odd") + " number, you ";
        if ((isEven && playerChoice === "even") || (!isEven && playerChoice === "odd")) {
            evenOddWins++;
            resultMessage += "win!";
        } else {
            evenOddLosses++;
            resultMessage += "lose!";
        }

        console.log(`Even/Odd Game - Wins: ${evenOddWins}, Losses: ${evenOddLosses}`);

        alert(resultMessage + "\nThat's " + evenOddWins + " wins and " + evenOddLosses + " losses!");
        break;
    }
}

window.startEvenOddGame = function() {
    playGame(evenOddGame);
};
