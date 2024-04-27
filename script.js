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

// for (let i = 0; i < riddles.length; i++) {
//   console.log(`Riddle ${i + 1}: ${riddles[i].question}`);
//   console.log(`Answer ${i + 1}: ${riddles[i].answer}`);
// }
// create a random number store into a variable 
const ranNum = Math.floor(Math.random() * riddles.length);
// get the btn to start the game 
const btn = document.getElementById("Ready");
// get the users input value 
const userInput = document.getElementById("user-value").value;
// set a counter
counter = 0;
// create a function that displays a question on the DOM 
function displayQuestion() {
  const riddleQ = document.querySelector(".lstRiddle");
  btn.innerHTML = "Next";
  // display each question using a counter
  riddleQ.innerHTML = riddles[counter].question;
  counter++;
  // check if the counter = to the length of riddles and start again
  if (counter === riddles.length){
    counter = 0;
  }
}

btn.onclick = displayQuestion;

