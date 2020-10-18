
let answerText = document.getElementById("answer");
let secret = Math.floor((Math.random() * 100) + 1);

function checkAnswer() {
 let answer = parseInt(document.getElementById("userInput").value);

  if(answer === secret) {
        answerText.textContent = "Correct! ";
    } else if(answer > secret) {
        answerText.textContent = "Your guess is TOO HIGH! Try something lower.";
    } else if(answer < secret) {
        answerText.textContent = "Your guess is TOO LOW! Try something higher.";
    }
}



let answerButton = document.getElementById("guess");
answerButton.addEventListener("click", checkAnswer);