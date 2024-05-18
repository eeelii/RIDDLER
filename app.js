// ****** ACUTAL GAME FUNCTION BEGINS HERE ********

// create sounds
const correctSound = new Audio("./sounds/its-all-part-of-the-plan.mp3");
const wrongSound = new Audio("./sounds/joker-laugh.mp3");
const readySound = new Audio("./sounds/and-here-we-go-joker.mp3");
const loseSound = new Audio("./sounds/lets-put-a-smile-on-that-face.mp3");
const winnerSound = new Audio("./sounds/joker-good-evening.mp3");

// create functions to play each sound
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

function defaultSound(audio) {
  audio.play();
}
// ************ ACTUAL GAME FUNCTION *********************

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
    const jokerMessage = document.querySelector(".message__joker");
    // get the users input value
    const userInput = document.getElementById("input-value");
    // get the score element
    const score = document.querySelector(".score__count");
    // get the question display element
    const cardRiddle = document.querySelector(".card__riddle");
    // get submit element
    const testMyLuck = document.getElementById("submit__answer");
    // get the body so you can change the background when needed
    const cardImage = document.querySelector(".card__image");
    // retrieve card__info div
    const cardInfo = document.querySelector(".card__info");
    // update score
    let scoreCounter = 0;

    // create a new h1 element stating game over
    const h1 = document.createElement("h1");
    h1.style.color = "white";
    // create a new div
    const playAgainDiv = document.createElement("div");
    playAgainDiv.id = "play__again__div";
    // Append h1 to playAgainDiv
    playAgainDiv.appendChild(h1);

    // get containers
    // get score-container
    const scoreContainerDiv = document.querySelector(".score-container");
    // get input container
    const inputContainerDiv = document.querySelector(".input-container");
    // get play again button
    const playAgainBtn = document.getElementById("play__again");
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
      //   btn.innerHTML = "Why so Serious";
      cardRiddle.innerHTML = "Smile, you are a winner !!";
      // remove submit button and add new button
    }

    // check if the answer is correct
    function checkAnswer() {
      // const answerShuflle = shuffleAr(riddles);
      if (userInput.value.trim() === "") {
        jokerMessage.innerHTML = "Must Answer First";
      } else if (
        userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()
      ) {
        score.style.color = "white";
        playSound();
        phrasesLst();
        scoreCounter++;
        updateScore();
        displayQ();
        userInput.value = "";
        cardImage.src = "./img/joker_inChair.png";
        // update score once player reaches 3 points
        if (scoreCounter === 3) {
          winnerMessage();
          setTimeout(function () {
            // resetGame();
            hideDiv(" ", "./img/winnerbk.jpg");
          }, 2500);
        }
      } else {
        defaultSound(wrongSound);
        score.style.color = "red";
        jokerMessage.innerHTML = "Wrong Answer!";
        cardImage.src = "NewBackground.webp";
        scoreCounter--;
        updateScore();
        userInput.value = "";
        displayQ();
        if (scoreCounter < 1) {
          defaultSound(loseSound);
          cardRiddle.innerHTML = "";
          scoreCounter = 0;
          updateScore();
          testMyLuck.innerHTML = "hahaha you lost";
          jokerMessage.innerHTML = "hahaha you lost";
          setTimeout(function () {
            // resetGame();
            hideDiv("Game Over!!", "./img/loserbk.jpg");
          }, 2900);
        }
      }
    }

    // create a function that iterates through the phraseslst
    function phrasesLst() {
      // create a random number
      const ranNum = Math.floor(Math.random() * phrases.length);
      jokerMessage.innerHTML = phrases[ranNum];
    }

    // create a function that displays the question when the button ready is hit
    const shuffleRiddle = shuffleAr(riddles);
    function displayQ() {
      const shuffleRiddle = shuffleAr(riddles);
      // riddleQ.innerHTML = riddles[counter].question;
      cardRiddle.innerHTML = shuffleRiddle[0].question;
    }

    // hid the div to restart the game
    function hideDiv(gameOver, imagePath) {
      cardImage.src = imagePath;
      testMyLuck.style.display = "none";
      scoreContainerDiv.style.display = "none";
      inputContainerDiv.style.display = "none";
      playAgainBtn.style.display = "block";
      h1.innerHTML = gameOver;
      cardInfo.appendChild(playAgainDiv);
      playAgainDiv.style.display = "";
    }
    // now create a playagain function
    function playAgain() {
      resetGame();
    }

    // now create a funciton to reset the hiddden div
    function resetDiv() {
      cardImage.src = "./img/joker_inChair.png";
      testMyLuck.style.display = "";
      scoreContainerDiv.style.display = "";
      inputContainerDiv.style.display = "";
      playAgainBtn.style.display = "none";
      playAgainDiv.style.display = "none";
    }
    // create a function to reset the game when the score gets to zero
    function resetGame() {
      cardImage.src = "./img/joker_inChair.png";
      jokerMessage.innerHTML = "";
      counter = 0;
      scoreCounter = 0;
      updateScore();
      displayQ();
      testMyLuck.innerHTML = "Test My Luck";
      userInput.value = "";
      resetDiv();
      checkAnswer();
    }

    testMyLuck.onclick = checkAnswer;

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkAnswer();
      }
    });

    playAgainBtn.onclick = playAgain;
    // call the displayQ function to display question on the dom
    displayQ();
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
