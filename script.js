class Theme {
  static light = true;
  static toggle() {
    const theme = document.getElementById('theme');
    console.log("toggleTheme", theme.href);
    if (Theme.light) {
      theme.href = "./dark.css";
    } else {
      theme.href = "./light.css";
    }
    Theme.light = !Theme.light;
  }
}

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
