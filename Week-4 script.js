function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value;
    const num = Math.floor(Math.random() * 10) + 1;
    const result = document.getElementById("result");

    if (guess == num) {
        result.innerText = "Correct! 🎉";
    } else {
        result.innerText = "Wrong! The number was " + num;
    }
}
