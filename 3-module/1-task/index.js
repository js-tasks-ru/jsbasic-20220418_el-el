function namify(users) {
  let result = users.map(item => item.name);
  result.join();
  return result;
}

