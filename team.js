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

sr.reveal(".eli__card", { delay: 200, origin: "right" });
sr.reveal(".abel__card", { delay: 450, origin: "top" });
sr.reveal(".abi__card", { delay: 500, origin: "left" });
