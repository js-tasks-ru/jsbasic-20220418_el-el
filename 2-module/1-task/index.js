let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {
  let sum = 0;
  for (let key of Object.values(salaries)) {
    if (Number.isInteger(key)) {
      sum += key;
    }
  }
  return sum;
}

sumSalary(salaries);
























