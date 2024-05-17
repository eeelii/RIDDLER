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
    // update score
    let scoreCounter = 0;


    // get containers 
    // get score-container 
    const scoreContainerDiv = document.querySelector(".score-container");
    // get input container 
    const inputContainerDiv = document.querySelector(".input-container");
    // get play again button

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
      cardRiddle.innerHTML = "Let's see you try again";
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
            resetGame();
          }, 2500);
        }
      } else {
        defaultSound(wrongSound);
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
            hideDiv();
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
    function hideDiv () {
        cardImage.src = "./img/loserbk.jpg";
        scoreContainerDiv.style.display = "none";
        inputContainerDiv.style.display = "none";
        testMyLuck.style.display = "none";
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
      checkAnswer();
    }

    testMyLuck.onclick = checkAnswer;

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkAnswer();
      }
    });
    // call the displayQ function to display question on the dom
    displayQ();
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
