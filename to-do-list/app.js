// Get DOM elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

// Event listeners
const loadEventListeners = () => {
  document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('tasks') === null ? hideList() : showList();
    displayTasksFromLocalStorage();
  });
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTask);
}

// Add a new task to the list
const addTask = (e) => {
  showList();

  if (taskInput.value !== '') {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    addTaskToLocalStorage(taskInput.value);

    const link = document.createElement('a');
    link.className = 'delete-task secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please type a task...')
  }
  e.preventDefault();
}

// Delete task from list
const deleteTask = (e) => {
  if (e.target.className === 'fa fa-remove') {
    e.target.parentElement.parentElement.remove();
    console.log(e.target.parentElement.parentElement.textContent);
  }
  deleteTaskFromLocalStorage(e.target.parentElement.parentElement.textContent);

  // Check if there's any task in the list 
  taskList.hasChildNodes() ? showList() : hideList();
}

const addTaskToLocalStorage = (task) => {
  // Check if local storage is empty or not
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Push task to array and set the item to local storage
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from local storage and display them in the UI
const displayTasksFromLocalStorage = () => {
  // Check if local storage is empty or not
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Iterate through the tasks and create an element for each task
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-task secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);

    taskList.appendChild(li);
  });
}

const deleteTaskFromLocalStorage = (taskToBeDeleted) => {
  // Check if local storage is empty or not
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskToBeDeleted === task) {
      tasks.splice(index, 1);
    }
  });

  // Hide list if there's no task left in the array
  tasks.length === 0 ? hideList() : showList();

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const hideList = () => taskList.style.display = 'none';
const showList = () => taskList.style.display = 'block';

loadEventListeners();