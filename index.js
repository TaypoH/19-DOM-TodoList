const todoList = document.querySelector('.task-form');
todoList.addEventListener('submit', createTodoTask);

const todoTask = document.querySelector('#todo-task');
const unorderedList = document.querySelector('.unordered-tasks');

const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('submit', createTodoTask);

function createTodoTask(event) {
    event.preventDefault();

    const taskText = todoTask.value.trim();

    if(taskText) {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        unorderedList.append(newTask);
        todoTask.value = '';

        const removeTaskBtn = document.createElement('button');
        removeTaskBtn.innerHTML = '&#x2715';
        removeTaskBtn.classList.add('remove-task');
        newTask.append(removeTaskBtn);
 
        removeTaskBtn.addEventListener('click', () => newTask.remove());
    } else {
        alert('Write your task!');
    }
}
