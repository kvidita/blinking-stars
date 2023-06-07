const { Stars } = require("./stars-class.js");
const { getBorder } = require("./border.js");
const { displayBorder, displayStar } = require("./displayer.js");

const getRandomNumber = (extreme) => {
  return Math.floor(Math.random() * extreme);
}

const createStars = () => {
  const stars = [];
  const starsCount = Math.floor(Math.random() * 20);

  for (let i = 0; i < starsCount; i++) {
    const x = getRandomNumber(process.stdout.columns);
    const y = getRandomNumber(process.stdout.rows / 2);
    const lifeTime = getRandomNumber(10) * 5;
    const star = new Stars([x, y], lifeTime);
    stars.push(star);
  }
  return stars;
}

const twinckleStars = () => {
  const stars = createStars();
  setInterval(() => {
    stars.map((star) => star.updateLifetime())
    stars.forEach((star) => {
      displayStar(star);
    })
  }, 100);

  setInterval(() => {
    const newStars = createStars();
    stars.push(...newStars);
  }, 1000);

};

const main = () => {
  twinckleStars();
}

main();


