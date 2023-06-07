const displayBorder = (borderCoordinates) => {
  borderCoordinates.forEach((coordinate) => {
    process.stdout.cursorTo(coordinate[1], coordinate[0]);
    process.stdout.write("█");
  });
}

const displayStar = (star) => {
  process.stdout.cursorTo(star.position[0], star.position[1]);
  process.stdout.write(star.icon);
  process.stdout.write('\u001B[?25l');
}

exports.displayBorder = displayBorder;
exports.displayStar = displayStar;