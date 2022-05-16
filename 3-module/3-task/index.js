function camelize(str) {
  let result = '';
  result = str.split('-');
  for (let i = 0; i < result.length; i++) {
    if (i > 0) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }
  }
  return result.join('');
}


