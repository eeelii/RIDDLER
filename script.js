// get ready  button to initiate game
const ready = document.getElementById("Ready");
// create a function to redirect to game html
function goToGame() {
  window.location.href = "game.html";
  ready.removeEventListener("reset", goToGame);
}
ready.addEventListener("click", goToGame);

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".nav__list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".htp__text", { delay: 200, origin: "top" });
sr.reveal(".htp__img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
