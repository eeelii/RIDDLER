// get ready  button to initiate game 
const ready = document.getElementById("Ready");
// create a function to redirect to game html 
function goToGame() {
    window.location.href = "game.html";
    ready.removeEventListener("reset", goToGame);
}
ready.addEventListener("click", goToGame);