const body = document.querySelector('body');
const lightBtn = document.getElementById('light_btn');
const forestBtn = document.getElementById('forest_btn');
const darkBtn = document.getElementById('dark_btn');
let currentMode = 'default';
let lightMode = localStorage.getItem('light-mode');
let forestMode = localStorage.getItem('forest-mode');

function enableLightMode() {
  forestBtn.classList.remove('forest_shadow');
  darkBtn.classList.remove('dark_shadow');
  lightBtn.classList.add('light_shadow');
  document.body.classList.remove('forest');
  document.body.classList.add('light');
  localStorage.setItem('light-mode', 'enabled');
  localStorage.removeItem('forest-mode');
}

lightBtn.addEventListener('click', () => {
  enableLightMode();
  currentMode = 'light';
});

function enableForestMode() {
  darkBtn.classList.remove('dark_shadow');
  lightBtn.classList.remove('light_shadow');
  forestBtn.classList.add('forest_shadow');
  document.body.classList.remove('light');
  document.body.classList.add('forest');
  localStorage.setItem('forest-mode', 'enabled');
  localStorage.removeItem('light-mode');
}

forestBtn.addEventListener('click', () => {
  enableForestMode();
  currentMode = 'forest';
});

function enableDefaultMode() {
  forestBtn.classList.remove('forest_shadow');
  lightBtn.classList.remove('light_shadow');
  darkBtn.classList.add('dark_shadow');
  document.body.classList.remove('light');
  document.body.classList.remove('forest');
  localStorage.removeItem('light-mode');
  localStorage.removeItem('forest-mode');
}

darkBtn.addEventListener('click', () => {
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