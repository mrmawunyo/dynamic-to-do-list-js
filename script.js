// Run script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');
    
    // Select the input field for task entry
    const taskInput = document.getElementById('task-input');
    
    // Select the task list (unordered list)
    const taskList = document.getElementById('task-list');

    // Define a function to add a new task
    function addTask() {
        // Get the trimmed value of the task input
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to addButton for adding a task on button click
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for adding a task with "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // (Optional) Initial invocation - could be used if tasks are preloaded
    // addTask();
});
