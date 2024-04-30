const riddles = [
  {
    question: "What has keys but can't open locks?",
    answer: "A piano",
  },
  {
    question: "What travels around the world while staying in a corner?",
    answer: "A stamp",
  },
  {
    question: "What comes up but never comes down?",
    answer: "Your age",
  },
  {
    question: "What has a head and a tail but no body?",
    answer: "A coin",
  },
  {
    question: "What can you break, even when you never pick it up or touch it?",
    answer: "A promise",
  },
  {
    question: "What is yours but mostly used by others?",
    answer: "Your name",
  },
  {
    question: "What kind of lion never roars?",
    answer: "A dandelion",
  },
  {
    question:
      "What’s bright orange with green on top and sounds like a parrot?",
    answer: "A carrot",
  },
  {
    question: "What’s really easy to get into, and hard to get out of?",
    answer: "Trouble",
  },
  {
    question:
      "You cut me, slice me, dice me, and all the while, you cry. What am I?",
    answer: "An Onion",
  },
];
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
const btn = document.getElementById("Ready");
// get the users input value
const userInput = document.getElementById("user-value");
// get the score element
const score = document.getElementById("user-Score");
// get the question display element
const riddleQ = document.querySelector(".lstRiddle");
// get submit element
const submitBtn = document.getElementById("submitAnswer");
// update score
let scoreCounter = 0;

// create a function that shuffles the riddle array 
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
    btn.classList.remove("readybtn");
    btn.innerHTML = "Must Answer First";
  } else if (userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()){
      btn.classList.remove("readybtn");
      phrasesLst();
      scoreCounter++;
      updateScore();
      displayQ();
      userInput.value = "";
      // update score once player reaches 3 points 
      if (scoreCounter === 5) {
        winnerMessage();
        setTimeout(function () {
          resetGame();
        }, 3500);
      }
    } else if (userInput.value.toLowerCase() !== shuffleRiddle[0].answer.toLowerCase()) {
      btn.innerHTML = "Wrong Answer!";
      scoreCounter--;
      updateScore();
      userInput.value = "";
      displayQ();
      if (scoreCounter === 0) {
        submitBtn.innerHTML = "hahaha you lost";
        btn.innerHTML = "hahaha you lost";
        setTimeout(function () {
          resetGame();
        }, 2500);
      }
    }
}
// create a function that iterates through the phraseslst
function phrasesLst() {
  // create a random number
  const ranNum = Math.floor(Math.random() * phrases.length);
  btn.innerHTML = phrases[ranNum];
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
  counter = 0;
  scoreCounter = 0;
  updateScore();
  displayQ();
  submitBtn.innerHTML = "Submit Answer";
  btn.classList.add("redaybtn");
  userInput.value = "";
  checkAnswer();
}

submitBtn.onclick = checkAnswer;

displayQ();

// Adding sound to submit button 
const audio = new Audio();
audio.src = "click.mp3";

// Making a transition for riddles to appear smoothly

// start the game again if the player has won at least once 
