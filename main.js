const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
 // Create the browser window.
 const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
   preload: path.join(__dirname, 'preload.js'),
  },
 });

 // and load the index.html of the app.
 win.loadFile('index.html');

 // Open the DevTools (optional)
 // win.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
 createWindow();

 app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
 });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
 if (process.platform !== 'darwin') {
  app.quit();
 }
});