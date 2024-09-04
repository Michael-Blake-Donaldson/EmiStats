// Function to fetch tasks from the backend and display them
function fetchTasks() {
    fetch('http://localhost:5000/tasks')  // Fetch tasks from Flask backend
        .then(response => response.json())
        .then(data => {
            const tasksDiv = document.getElementById('tasks');
            tasksDiv.innerHTML = '';  // Clear the current content

            // Loop through tasks and display them with their counters
            for (const task in data) {
                tasksDiv.innerHTML += `<p>${task}: ${data[task]}</p>`;
            }
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Function to increase the task count and save automatically
function increaseTask(taskName) {
    // Send a POST request to the Flask backend to increment the task
    fetch('http://localhost:5000/increment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: taskName }),  // Send the task name
    })
    .then(response => response.json())
    .then(data => {
        // After updating, refresh the tasks list
        fetchTasks();
    })
    .catch(error => console.error('Error incrementing task:', error));
}

// Load tasks when the page loads
window.onload = function() {
    fetchTasks();  // Fetch and display tasks initially
};
