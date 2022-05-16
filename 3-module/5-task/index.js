function getMinMax(str) {
  let result = str
    .split(' ')
    .filter(item => parseInt(item))
  return {"min": Math.min(...result), "max": Math.max(...result)};

}

