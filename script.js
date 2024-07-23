let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemps = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    attemps++;
    attemptsDisplay.textContent = `Intentos: ${attemps}`;

    if(userGuess === randomNumber){
        message.textContent = "Feliciades adivinaste el numero"
    }else if(userGuess > randomNumber) {
        message.textContent = "El numero es mayor"
    }else {
        message.textContent = "El numero es menor"
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}