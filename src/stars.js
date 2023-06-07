const { Stars } = require("./stars-class.js");
const { getBorder } = require("./border.js");
const { displayBorder, displayStar } = require("./displayer.js");

const getRandomNumber = (extreme) => {
  return Math.floor(Math.random() * extreme);
}

const createStar = () => {
  const column = getRandomNumber(process.stdout.columns);
  const row = getRandomNumber(process.stdout.rows / 2);
  const lifeTime = getRandomNumber(10) * 5;
  const star = new Stars({ column, row }, lifeTime);
  return star;
}

const createStars = () => {
  const starsCount = Math.floor(Math.random() * 20);
  const stars = Array.from({ length: starsCount }, createStar)
  return stars;
}

const addNewStars = (stars) => {
  return () => {
    const newStars = createStars();
    stars.push(...newStars);
  };
}

const updateAndDisplayStar = (stars) => {
  return () => {
    stars.forEach((star) => {
      star.updateLifetime();
      displayStar(star);
    });
  };
}

const twinckleStars = () => {
  const stars = createStars();
  setInterval(updateAndDisplayStar(stars), 100);
  setInterval(addNewStars(stars), 1000);
};

const main = () => {
  twinckleStars();
}

main();
