const { Star } = require("./star.js");
const { getRandomNumber } = require("../lib/randomNum.js");

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

exports.createStars = createStars;