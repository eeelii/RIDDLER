const riddles = [
  {
    question: "What has keys but can't open locks?",
    answer: "A piano",
  },
  {
    question: "What travels around then world while staying in a corner?",
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

console.log(riddles[0].question);
console.log(riddles[0].answer);

// create a random number store into a variable
const ranNum = Math.floor(Math.random() * riddles.length);
// get the btn to start the game
const btn = document.getElementById("Ready");
// get the users input value
const userInput = document.getElementById("user-value");
// get the score element
const score = document.getElementById("user-Score");
// set a counter
counter = 0;
// create a function that displays a question on the DOM
function displayQuestion() {
  const riddleQ = document.querySelector(".lstRiddle");
  // display the first riddle
  // riddleQ.innerHTML = riddles[counter].question;
  riddleQ.innerHTML = riddles[ranNum].question;
  // change btn to next
  // btn.innerHTML = "Next";
}
// update score 
let scoreCounter = 5;
function updateScore() {
  score.innerHTML = scoreCounter;
  scoreCounter++;
}

// create a function that checks if the answer for the riddle is correct
function answerCheck() {
  if (userInput.value === "") {
    btn.innerHTML = "Must Answer First";
  } else if (userInput.value === riddles[ranNum].answer) {
    btn.innerHTML = "Next";
    counter++;
    if (counter === riddles.length) {
      counter = 0;
    }
    displayQuestion();
  }
  updateScore();

}

// get the submit element
const submit = document.getElementById("submit");

submit.onclick = answerCheck;
// dispaly next question
btn.onclick = displayQuestion;

// Reset form after answering and it goes to next question
// function resetForm() {
//   document.getElementById("answer-form").reset();
// }




// Shuffling the riddles, WIP


// function shuffle(riddles) {
//   for (let i = riddles.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [riddles[i], (riddles[j] = riddles[j]), riddles[i]];
//   }
//   return riddles;
// }

// const shuffleRiddles = shuffle(riddles); **** COULD BE REPLACED WITH ranNum variable above, unless you could make it work ****


