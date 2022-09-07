function showPage(id) {
  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  const element = document.getElementById(id);
  element.style.display = 'block';
}
