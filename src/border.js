const getBorder = (screenSize) => {
  const boundary = [];

  for (let x = 0; x < screenSize[0]; x++) {
    boundary.push([0, x]);
    boundary.push([screenSize[1] - 1, x]);
  };

  for (let x = 1; x < screenSize[1] - 1; x++) {
    boundary.push([x, 0]);
    boundary.push([x, screenSize[0] - 1]);
  }

  return boundary;
}

exports.getBorder = getBorder;