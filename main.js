const { updateAndDisplay, createStars } = require("./src/stars-blinker.js")
const { exec } = require("node:child_process");

const twinckleStars = () => {
  exec("afplay ~/Desktop/carry-me-on.mp3");
  process.stdout.write('\u001B[?25l');
  const stars = createStars();
  setInterval(() => updateAndDisplay(stars), 100);
  setInterval(() => stars.push(...createStars()), 1000);
};

const main = () => {
  twinckleStars();
}

main();