//index.js

//Requirements for creating window
const { app, BrowserWindow } = require('electron')
const path = require('path/posix')
//Creating window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}
//Opening window
app.whenReady().then(() => {
    createWindow()
//Helping MacOS to not create multiple windows (seriously who uses this shit)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

