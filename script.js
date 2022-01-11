const input = document.getElementById("input");
const btn = document.getElementById("btn");
const previousGuesses = document.getElementById("previous-guesses");
const answer = document.getElementById("answer");
const lastGuess = document.getElementById("lastGuess");
const gameOver = document.getElementById("game-over");
let numberOfGuesses = 0;

let randomNumber = Math.floor(Math.random() * 100) + 1;
input.focus();

btn.addEventListener("click", function () {
  if (input.value !== "") {
    numberOfGuesses++;
    if (numberOfGuesses === 1) {
      const para = document.createElement("h3");
      para.innerHTML = "Previous Guesses:";
      para.classList.add("para");
      previousGuesses.appendChild(para);
    }
    if (numberOfGuesses < 10) {
      console.log(randomNumber);
      console.log(input.value);
      if (parseInt(input.value) === randomNumber) {
        answer.innerHTML = "Congratulations! You got it right!";
        answer.classList.add("right");
        lastGuess.innerHTML = "";
        gameOver.style.display = "flex";
        input.disabled = true;
        btn.disabled = true;
      } else if (input.value < randomNumber) {
        answer.innerHTML = "Wrong!";
        answer.classList.add("wrong");
        lastGuess.innerHTML = "Last guess was too low!";
      } else {
        answer.innerHTML = "Wrong!";
        answer.classList.add("wrong");
        lastGuess.innerHTML = "Last guess was too high!";
      }
    } else {
      answer.innerHTML = "!!!GAME OVER!!!";
      answer.classList.add("wrong");
      lastGuess.innerHTML = "";
      gameOver.style.display = "flex";
      input.disabled = true;
      btn.disabled = true;
    }
    const para = document.createElement("h3");
    para.innerHTML = input.value;
    para.classList.add("para");
    previousGuesses.appendChild(para);
    input.value = "";
  }
});

gameOver.addEventListener("click", function () {
  numberOfGuesses = 0;
  previousGuesses.innerHTML = "";
  answer.innerHTML = "";
  gameOver.style.display = "none";
  randomNumber = Math.floor(Math.random() * 100);
  input.focus();
  btn.disabled = false;
  input.disabled = false;
});
