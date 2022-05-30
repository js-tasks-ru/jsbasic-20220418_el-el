function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {

    if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
      table.rows[i].classList.add('available');
    } else if (table.rows[i].cells[3].getAttribute('data-available') === null) {
      table.rows[i].setAttribute('hidden', '');
    }
    else {table.rows[i].classList.add('unavailable');}

    if (table.rows[i].cells[2].textContent === 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2].textContent === 'f') {
      table.rows[i].classList.add('female');
    }

    if (table.rows[i].cells[1].textContent < 18) {
      table.rows[i].style.textDecoration = "line-through";
    }
  }
}



