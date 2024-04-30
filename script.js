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
      } else {
        btn.innerHTML = "Wrong Answer!";
        scoreCounter--;
        updateScore();
        userInput.value = "";
        if (scoreCounter === 0) {
          submitBtn.innerHTML = "hahaha you lost";
          btn.innerHTML = "hahaha you lost";
          setTimeout(function () {
            resetGame();
          }, 2500);
        } else {
          submitBtn.innerHTML = "hahaha you lost";
          btn.innerHTML = "hahaha you lost";
          scoreCounter = 0;
          updateScore();
          setTimeout(function () {
            resetGame();
          }, 2500)
        }
      }
  }





//   current working function 
// check if the answer is correct

// function checkAnswer() {
//     // const answerShuflle = shuffleAr(riddles);
//     if (userInput.value.trim() === "") {
//       btn.classList.remove("readybtn");
//       btn.innerHTML = "Must Answer First";
//     } else {
//       if (
//         userInput.value.toLowerCase() === shuffleRiddle[0].answer.toLowerCase()
//       ) {
//         btn.classList.remove("readybtn");
//         phrasesLst();
//         scoreCounter++;
//         updateScore();
//         displayQ();
//         userInput.value = "";
//         // update score once player reaches 3 points 
//         if (scoreCounter === 5) {
//           winnerMessage();
//           setTimeout(function () {
//             resetGame();
//           }, 3500);
  
//         }
//       } else {
//         btn.innerHTML = "Wrong Answer!";
//         scoreCounter--;
//         updateScore();
//         userInput.value = "";
//         if (scoreCounter === 0) {
//           submitBtn.innerHTML = "hahaha you lost";
//           btn.innerHTML = "hahaha you lost";
//           setTimeout(function () {
//             resetGame();
//           }, 2500);
//         } else {
//           submitBtn.innerHTML = "hahaha you lost";
//           btn.innerHTML = "hahaha you lost";
//           scoreCounter = 0;
//           updateScore();
//           setTimeout(function () {
//             resetGame();
//           }, 2500)
//         }
//       }
//     }
  }