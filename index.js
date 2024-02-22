const inputField = document.getElementById('taskInput');
const incompleteTasks = document.getElementById('incompleteTasks');
const completedTasks = document.getElementById('completedTasks');
const addTask = () => {
  const inputValue = inputField.value;
  if (!inputValue) {
    alert('Please enter a task');
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = `
     ${inputValue}
  `;
  incompleteTasks.appendChild(li);
  li.addEventListener('click', (e) => {
    removeTask(e.target, incompleteTasks);
    completeTask(li.innerText);
  });
  inputField.value = '';
};

const removeTask = (item, parent) => {
  parent.removeChild(item);
};

const completeTask = (taskDetails) => {
  const p = document.createElement('li');
  p.innerHTML = `
     ${taskDetails}
    `;
  completedTasks.appendChild(p);
  p.addEventListener('click', (e) => {
    removeTask(e.target, completedTasks);
  });
};
