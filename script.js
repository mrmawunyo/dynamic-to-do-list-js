// This is the beginning of the script.
// The code starts with an event listener for the 'DOMContentLoaded' event.
document.addEventListener('DOMContentLoaded', () => {

    // All subsequent code is placed inside this arrow function's block.
    // This ensures that the DOM elements are fully loaded before the script
    // attempts to select them.

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        // ... (function logic) ...
    };

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

// This is the end of the script.
}); // The closing curly brace and parenthesis mark the end of the event listener's callback function.