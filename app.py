from flask import Flask, jsonify, request, render_template
import json
import os

app = Flask(__name__)

# Path to the tasks.json file
TASKS_FILE = 'tasks.json'

# Load tasks from the JSON file if it exists
def loadTasks():
    if os.path.exists(TASKS_FILE):
        with open(TASKS_FILE, 'r') as file:
            return json.load(file)
    else:
        # If the file doesn't exist, initialize the tasks
        return {"Chocolate Milk": 0, "Make Food": 0, "Take Nap": 0}

# Save tasks to the JSON file
def saveTasks(tasks):
    with open(TASKS_FILE, 'w') as file:
        json.dump(tasks, file)

# Load tasks when the app starts
tasks = loadTasks()

@app.route('/')
def index():
    return render_template('index.html')

# API to get current tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# API to increment task
@app.route('/increment', methods=['POST'])
def increment_task():
    task_name = request.json.get('task')  # Get the task from the POST request
    if task_name in tasks:
        tasks[task_name] += 1
        saveTasks(tasks)  # Save automatically after incrementing
        return jsonify(tasks)
    else:
        return jsonify({"error": "Task not found"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
