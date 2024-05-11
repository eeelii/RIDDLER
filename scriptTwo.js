// get the ready button
const readyBtn = document.getElementById("Ready");
// get main game div
<<<<<<< HEAD
const mainGame = document.querySelector(".main__game");

// create a function that will display the main-game content
=======
const mainGame = document.querySelector(".main-game");
// select the ready-content element 
const readContent = document.querySelector(".ready-content");

<<<<<<< HEAD
// create a function that will display the main-game content
=======

// create a variable for each sound 
const correctSound = new Audio("click.mp3");
const wrongSound = new Audio("gameOver.wav");
const winSound = new Audio("");
const loseSound = new Audio("");


// now create a function for each sound 
function playWrong() {
  wrongSound.play();
}

function playSound() {
  correctSound.play();
}
// create a function that will display the main-game content 
>>>>>>> a31adb544db0f60d74ae54255c6c61d8d177854a
>>>>>>> 671786665ba8d61177443866527110f7f9a70287
function displayGame() {
  mainGame.style.display = "flex";
  readyBtn.style.display = "none";
  readContent.style.display = "none";
}
readyBtn.onclick = displayGame;

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
<<<<<<< HEAD
      } else if (
        userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()
      ) {
=======
<<<<<<< HEAD
      } else if (
        userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()
      ) {
=======
      } else if (userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()) {
        playSound();
>>>>>>> a31adb544db0f60d74ae54255c6c61d8d177854a
>>>>>>> 671786665ba8d61177443866527110f7f9a70287
        btn.classList.remove("message-btn");
        background.style.backgroundImage = "url(./img/joker_inChair.png)";
        phrasesLst();
        scoreCounter++;
        updateScore();
        displayQ();
        userInput.value = "";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 671786665ba8d61177443866527110f7f9a70287
        // update score once player reaches 3 points
        if (scoreCounter === 3) {
=======
        // update score once player reaches 3 points 
        if (scoreCounter === 5) {
>>>>>>> a31adb544db0f60d74ae54255c6c61d8d177854a
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
          riddleQ.innerHTML = "";
          scoreCounter = 0;
          updateScore();
          submitBtn.innerHTML = "hahaha you lost";
          btn.innerHTML = "hahaha you lost";
          setTimeout(function () {
            resetGame();
          }, 1000);
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
      readContent.style.display = "flex";
      checkAnswer();
    
    }

    submitBtn.onclick = checkAnswer;

    // call the displayQ function to display question on the dom
    displayQ();

    // Adding sound to submit button
    const audio = new Audio();
    audio.src = "click.mp3";
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
