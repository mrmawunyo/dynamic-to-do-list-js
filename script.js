// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false = don't save again while loading
        });
    }

    // Function to save tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to get the current list of tasks from Local Storage
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // If no task text is passed (e.g., from UI), use the input field
        if (!taskText) {
            taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task.');
                return;
            }
        }

        // Create a new <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task from DOM and Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(li);

            // Update Local Storage
            let tasks = getStoredTasks();
            tasks = tasks.filter(task => task !== taskText);
            saveTasks(tasks);
        };

        // Append the button to the <li> and the <li> to the <ul>
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }

        // Clear input field
        taskInput.value = '';
    }

    // Add event listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
