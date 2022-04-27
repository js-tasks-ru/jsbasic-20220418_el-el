function print(text) {
  console.log(text);
}

function isValid(name) {
  let answer = false;
  if (name !== null && name.length >= 4 && name.indexOf(' ') <= 0) {
    answer = true;
  }
  return answer;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
