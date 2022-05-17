function makeFriendsList(friends) {
  const list = document.createElement('ul');
  for (let user of friends) {
    let li = `<li>${user.firstName} ${user.lastName}`;
    list.insertAdjacentHTML('beforeend', li);
  }
  return list;
}

