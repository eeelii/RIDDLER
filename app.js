
// ****** ACUTAL GAME FUNCTION BEGINS HERE ********
// get card riddle for testing to assign riddles
const cardRiddle = document.querySelector(".card__riddle");

// #create a function to change the text color 
const changeColor = () => cardRiddle.style.color = "red";

cardRiddle.onclick = changeColor;