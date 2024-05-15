// get the ready button
const readyBtn = document.getElementById("Ready");
// get main game div
const mainGame = document.querySelector(".main__game");
// get-ready content
const readyContent = document.querySelector(".ready-content");

// create a function that will display the main-game content
function displayGame() {
  playReady();
  readyBtn.style.display = "none";
  readyContent.style.display = "none";
  setTimeout(function () {
    mainGame.style.display = "flex";
  }, 3500);
}
readyBtn.onclick = displayGame;

// select the ready-content element
// const readContent = document.querySelector(".ready-content");

//------------------------ this code has to go after the display game function -----------------------------------------

// create a function that will display the main-game content
// create a variable for each sound
const correctSound = new Audio("./sounds/its-all-part-of-the-plan.mp3");
const wrongSound = new Audio("./sounds/joker-laugh.mp3");
const readySound = new Audio("./sounds/and-here-we-go-joker.mp3");
const loseSound = new Audio("./sounds/lets-put-a-smile-on-that-face.mp3");
const winnerSound = new Audio("./sounds/joker-good-evening.mp3");
const clickSound = new Audio("./sounds/click.mp3");
// // now create a function for each sound
function playWrong() {
  wrongSound.play();
}

function playSound() {
  correctSound.play();
}

function playReady() {
  readySound.play();
}

function playLose() {
  loseSound.play();
}

function playWinner() {
  winnerSound.play();
}

function playClick() {
  clickSound.play();
}
// create a function that will display the main-game content

// function displayGame() {
//   mainGame.style.display = "flex";
//   readyBtn.style.display = "none";
//   readContent.style.display = "none";
// }
// readyBtn.onclick = displayGame;

// create the functionality of the game
fetch("./riddlesjson.json")
  .then((response) => response.json())
  .then((data) => {
    const riddles = data;
    const phrases = [
      "Why so serious?",
      "What doesn't kill you simply makes you stranger!",
      "As you know, madness is like gravity: All it takes is a little push",
      "If you’re good at something, never do it for free",
      "When they treat you like a joke, leave them like it's funny",
      "A joke a day keeps the gloom away!",
      "Don't test the monster in me!",
    ];

    // get the btn to start the game
    const btn = document.getElementById("message-joker");
    // get the users input value
    const userInput = document.getElementById("user-value");
    // get the score element
    const score = document.getElementById("user-Score");
    // get the question display element
    const riddleQ = document.querySelector(".lstRiddle");
    // get submit element
    const submitBtn = document.getElementById("submitAnswer");
    // get the body so you can change the background when needed
    const background = document.querySelector("body");
    // update score
    let scoreCounter = 0;

    // create a function to shuffle the riddles
    function shuffleAr(arHere) {
      for (let i = arHere.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arHere[i], arHere[j]] = [arHere[j], arHere[i]];
      }
      return arHere;
    }

    // create a function that updates the score each time someone gets a question right
    function updateScore() {
      score.innerHTML = scoreCounter;
    }

    // create a function that displays winner once a player reaches 3 points
    function winnerMessage() {
      playWinner();
      btn.innerHTML = "Why so Serious";
      riddleQ.innerHTML = "Let's see you try again";
      // retrieve the answer div
      const inputDiv = document.querySelector(".answer");
      inputDiv.style.display = "none";
      // remove submit button and add new button
      submitBtn.style.display = "none";
      setTimeout(function () {
        inputDiv.style.display = "";
        // remove submit button and add new button
        submitBtn.style.display = "";
      }, 4500);
    }

    // check if the answer is correct
    function checkAnswer() {
      // const answerShuflle = shuffleAr(riddles);
      if (userInput.value.trim() === "") {
        btn.classList.remove("message-btn");
        btn.innerHTML = "Must Answer First";
      } else if (
        userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()
      ) {
        playSound();
        btn.classList.remove("message-btn");
        background.style.backgroundImage = "url(./img/joker_inChair.png)";
        phrasesLst();
        scoreCounter++;
        updateScore();
        displayQ();
        userInput.value = "";

        // update score once player reaches 3 points
        if (scoreCounter === 3) {
          winnerMessage();
          setTimeout(function () {
            resetGame();
          }, 2500);
        }
      } else {
        playWrong();
        btn.innerHTML = "Wrong Answer!";
        background.style.backgroundImage = "url(./NewBackground.webp)";
        scoreCounter--;
        updateScore();
        userInput.value = "";
        displayQ();
        if (scoreCounter < 1) {
          playLose();
          riddleQ.innerHTML = "";
          scoreCounter = 0;
          updateScore();
          submitBtn.innerHTML = "hahaha you lost";
          btn.innerHTML = "hahaha you lost";
          setTimeout(function () {
            resetGame();
          }, 2900);
        }
      }
    }

    // create a function that iterates through the phraseslst
    function phrasesLst() {
      // create a random number
      const ranNum = Math.floor(Math.random() * phrases.length);
      btn.innerHTML = phrases[ranNum];
      btn.style.cursor = "arrow";
    }

    // create a function that displays the question when the button ready is hit
    const shuffleRiddle = shuffleAr(riddles);
    function displayQ() {
      const shuffleRiddle = shuffleAr(riddles);
      // riddleQ.innerHTML = riddles[counter].question;
      riddleQ.innerHTML = shuffleRiddle[0].question;
    }

    // create a function to reset the game when the score gets to zero
    function resetGame() {
      mainGame.style.display = "";
      readyBtn.style.display = "";
      counter = 0;
      scoreCounter = 0;
      updateScore();
      displayQ();
      submitBtn.innerHTML = "Submit Answer";
      btn.classList.add("message-btn");
      userInput.value = "";
      background.style.backgroundImage = "url(./img/background.jpeg)";
      readyContent.style.display = "block";
      checkAnswer();
    }

    submitBtn.onclick = checkAnswer;

    // call the displayQ function to display question on the dom
    displayQ();
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

testLuck.addEventListeners("click", () => {
  playClick();
});
