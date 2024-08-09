let bnhWins = 0;
let bnhLosses = 0;
let bnhTies = 0;

// Function for the Bear, Ninja, Hunter game
function bnhGame() {
    alert("Step into the Arena of Bear, Ninja, Hunter! Brace yourself for the ultimate showdown where strategy meets chance!");

    const choices = ['Bear', 'Ninja', 'Hunter'];

    while (true) {
        const userChoice = prompt("Choose Bear, Ninja, or Hunter:");

        if (userChoice === null) {
            alert('Game over. Thanks for playing!');
            return;
        }

        const normalizedUserChoice = userChoice.trim().toLowerCase();

        if (!['bear', 'ninja', 'hunter'].includes(normalizedUserChoice)) {
            alert("Invalid choice. Please choose Bear, Ninja, or Hunter.");
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();

        let result;

        if (normalizedUserChoice === 'bear') {
            if (computerChoice === 'ninja') {
                result = 'You win!';
                bnhWins++;
            } else if (computerChoice === 'hunter') {
                result = 'The Computer wins!';
                bnhLosses++;
            } else {
                result = "It's a tie!";
                bnhTies++;
            }
        } else if (normalizedUserChoice === 'ninja') {
            if (computerChoice === 'hunter') {
                result = 'You win!';
                bnhWins++;
            } else if (computerChoice === 'bear') {
                result = 'The Computer wins!';
                bnhLosses++;
            } else {
                result = "It's a tie!";
                bnhTies++;
            }
        } else if (normalizedUserChoice === 'hunter') {
            if (computerChoice === 'bear') {
                result = 'You win!';
                bnhWins++;
            } else if (computerChoice === 'ninja') {
                result = 'The Computer wins!';
                bnhLosses++;
            } else {
                result = "It's a tie!";
                bnhTies++;
            }
        }

        console.log(`BNH Game - Wins: ${bnhWins}, Losses: ${bnhLosses}, Ties: ${bnhTies}`);

        alert(`You chose ${userChoice}. The computer chose ${computerChoice}. ${result}\nResults: ${bnhWins} wins, ${bnhLosses} losses, ${bnhTies} ties.`);
        break;
    }
}

window.startBnhGame = function() {
    playGame(bnhGame);
};
