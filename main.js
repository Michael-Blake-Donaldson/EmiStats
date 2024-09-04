const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process');  // Import child_process to run Python

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,  // Enable Node.js integration
            contextIsolation: false // Allow direct access between frontend and backend
        }
    });

    win.loadFile('templates/index.html');  // Load your frontend HTML
}

// Function to start the Flask backend
function startFlaskBackend() {
    exec('python app.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Flask server: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Flask stderr: ${stderr}`);
        }
        console.log(`Flask stdout: ${stdout}`);
    });
}

app.whenReady().then(() => {
    startFlaskBackend();  // Start the Flask server when the app is ready
    createWindow();       // Create the Electron window
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});