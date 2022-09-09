function showPage(id) {
  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  const element = document.getElementById(id);
  element.style.display = 'block';
}

function plus(id) {
  let d = document.createElement('div');
  d.className = 'tier-content';
  d.contentEditable = true;
  // add d before or after id?
  const e = document.getElementById(id);
  e.parentElement.appendChild(d);
  d.focus();
}
