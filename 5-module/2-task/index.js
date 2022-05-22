function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  btn.onclick = function() {
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  };
}
