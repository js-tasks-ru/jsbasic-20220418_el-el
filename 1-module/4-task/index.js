function checkSpam(str) {
  let answer = str.toLowerCase();
  if (answer.indexOf("xxxxx") !== -1 || answer.indexOf("1xbet") !== -1) {
    return true;
  } else {
    return false;
  }
}




