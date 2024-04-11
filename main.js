const { app, BrowserWindow } = require('electron');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true // Esta linha remove a barra de menu
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
