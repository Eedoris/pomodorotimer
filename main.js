
const { app, BrowserWindow } = require('electron')
const path = require('path')


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    icon: path.join(__dirname, 'assets', 'app-icon.ico'), 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.setMenuBarVisibility(false)
  win.webContents.setZoomFactor(1)
  win.setContentProtection(true)

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})