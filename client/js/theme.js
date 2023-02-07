const body = document.querySelector('body');
const lightBtn = document.getElementById('light_btn');
const forestBtn = document.getElementById('forest_btn');
const darkBtn = document.getElementById('dark_btn');
let currentMode = 'default';
let lightMode = localStorage.getItem('light-mode');
let forestMode = localStorage.getItem('forest-mode');

function enableLightMode() {
  document.body.classList.remove('forest');
  document.body.classList.add('light');
  localStorage.setItem('light-mode', 'enabled');
  localStorage.removeItem('forest-mode');
}

lightBtn.addEventListener("click", () => {
  enableLightMode();
  currentMode = 'light';
});

function enableForestMode() {
  document.body.classList.remove('light');
  document.body.classList.add('forest');
  localStorage.setItem('forest-mode', 'enabled');
  localStorage.removeItem('light-mode');
}

forestBtn.addEventListener("click", () => {
  enableForestMode();
  currentMode = 'forest';
});

function enableDefaultMode() {
  document.body.classList.remove('light');
  document.body.classList.remove('forest');
  localStorage.removeItem('light-mode');
  localStorage.removeItem('forest-mode');
}

darkBtn.addEventListener("click", () => {
  enableDefaultMode();
  currentMode = 'default';
});

if (lightMode === 'enabled') {
  enableLightMode();
  currentMode = 'light';
} else {
  if (forestMode === 'enabled') {
    enableForestMode();
    currentMode = 'forest';
  } else {
    enableDefaultMode();
  }
}