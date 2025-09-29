const information = document.getElementById('info');

const nodeVersion = document.getElementById('node-version');
const chromeVersion = document.getElementById('chrome-version');
const electronVersion = document.getElementById('electron-version');

nodeVersion.innerText = window.versions.node();
chromeVersion.innerText = window.versions.chrome();
electronVersion.innerText = window.versions.electron();