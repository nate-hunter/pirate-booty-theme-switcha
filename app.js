const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Save theme to local storage

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

// Event Handlers

darkButton.onclick = () => {
    body.classList.replace(body.classList[0], 'dark');
    localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
    body.classList.replace(body.classList[0], 'light');
    localStorage.setItem('theme', 'light');

}

solarButton.onclick = () => {
    body.classList.replace(body.classList[0], 'solar');
    localStorage.setItem('theme', 'solar');

}

