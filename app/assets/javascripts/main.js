import Timer from "./timer.js";

let players = document.getElementById('details').getAttribute("data-players")
let duration = document.getElementById('details').getAttribute("data-duration") / players

for (let i = 0; i < players; i++) {
  new Timer(
    document.querySelector(`.timer-${i + 1}`),
    i + 1,
    duration
  );
}
