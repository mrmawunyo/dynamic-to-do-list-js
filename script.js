// Function to add a new task
function addTask() {
    // Get the input value and trim whitespace
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item (li) and set its textContent to the taskText
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Assign an onclick event to the remove button to remove the li from taskList
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
