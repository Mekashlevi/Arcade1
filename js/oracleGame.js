// Function for the oracle game
function oracleGame() {
    alert("Enter the Realm of the Magic Eight Ball! Pose your yes or no question, give it a shake, and unveil your fate!");

    const responses = [
        "Yes, definitely!",
        "No, not at all.",
        "Ask again later.",
        "Cannot predict now.",
        "It is certain.",
        "Don't count on it.",
        "Yes, in due time.",
        "My sources say no."
    ];

    while (true) {
        const question = prompt("Ask your yes or no question:");

        if (question === null) {
            alert('Game over. Thanks for playing!');
            console.log("Oracle Game - Game over.");
            return;
        }

        if (question.trim() === "") {
            alert("Please ask a yes or no question.");
            continue;
        }

        const randomIndex = Math.floor(Math.random() * responses.length);
        const answer = responses[randomIndex];
        alert(`The Magic Eight Ball says: ${answer}`);
        console.log(`Oracle Game - Question: "${question}" - Answer: "${answer}"`);
        break;
    }
}

window.startOracleGame = function() {
    playGame(oracleGame);
};
