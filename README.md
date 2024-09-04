# EmiStatsApp

**EmiStatsApp** is a desktop application built using Electron and Flask. The app allows me to manage tasks and display counters that increment when buttons are clicked. 
Task data is saved and loaded from a JSON file using a Flask backend, and the app runs in a standalone executable for Windows.

## Technologies Used
- **Electron**: Used for building the desktop application and creating a cross-platform executable.
- **Flask**: Python-based backend that serves task data and handles state persistence.
- **HTML, CSS, JavaScript**: Used for the frontend of the application, loaded via Electron.
- **JSON**: Task data is saved and loaded from a `tasks.json` file, ensuring persistent storage.
- **Node.js**: Used to run the Electron app and handle dependencies.
- **Python**: Flask backend for task management and state storage.

## Key Concepts
- **Electron**: Enables web technologies (HTML, CSS, JS) to be used for building desktop applications.
- **Flask**: Provides a lightweight backend that handles requests to retrieve, update, and save task data in real-time.
- **Task Management**: The app displays tasks, and each task has a counter that increments when a button is clicked.
- **Persistence**: Task data is saved automatically to a JSON file on the disk so that it can be reloaded the next time the app is opened.
- **Inter-process Communication**: Electron’s main process (`main.js`) handles starting the Flask server and manages the communication between the backend and frontend.
- **Packaging**: The app is packaged into a Windows executable (`.exe`) using Electron Packager or Electron Builder.

## Features
- **Task Counter**: Increment a counter for each task (e.g., "Make Food", "Take Nap").
- **Persistent Storage**: Task data is stored in `tasks.json` and automatically saved and loaded when the app starts and exits.
- **Custom Icon**: The app has a custom icon when packaged as a Windows executable.
- **Standalone Executable**: The app can be packaged as a `.exe` file for Windows, making it easy to run on any machine.
