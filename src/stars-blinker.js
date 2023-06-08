const { Star } = require("./star.js");
const { getBorder } = require("./border.js");
const { displayBorder, displayStar } = require("./displayer.js");

const getRandomNumber = (extreme) => {
  return Math.floor(Math.random() * extreme);
}

const createStar = () => {
  const column = getRandomNumber(process.stdout.columns);
  const row = getRandomNumber(process.stdout.rows / 2);
  const lifeTime = getRandomNumber(10) * 5;
  const star = new Star({ column, row }, lifeTime);
  return star;
}

const createStars = () => {
  const starsCount = Math.floor(Math.random() * 20);
  const stars = Array.from({ length: starsCount }, createStar)
  return stars;
}

const updateAndDisplay = (stars) => {
  stars.forEach((star) => {
    star.updateLifetime();
    displayStar(star);
  });
}

exports.updateAndDisplay = updateAndDisplay;
exports.createStars = createStars;