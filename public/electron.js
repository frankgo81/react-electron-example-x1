const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

require('update-electron-app')({
	repo: 'kitze/react-electron-example',
	updateInterval: '1 hour'
});

function createWindow() {
	console.log(__dirname);

	mainWindow = new BrowserWindow({
		width: 800,
		height: 1000,
		icon: path.join(__dirname, '../src/logo-64x64.png') //[1] E:\github\x1\public
	});
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
