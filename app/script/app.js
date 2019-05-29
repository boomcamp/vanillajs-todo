const list = [];
const newTaskForm = document.getElementById('newTaskForm')
newTaskForm.classList.toggle('hide');

function Task(task) {
    this.task = task;
    this.id = 'new';
  }

function addTask(task) {
    if (task) {
      const newTask = new Task(task);
      list.push(newTask);
      document.getElementById('newItemInput').value = '';
  
      const taskElem = document.createElement('li');
      taskElem.id = 'item';
  
      const item = document.getElementById('newList').appendChild(taskElem);
      item.innerHTML = `
          <a id="new" class="list-group-item">
            ${newTask.task}
          </a>
        `;
    }
  
    newTaskForm.classList.toggle('hide');
}

document
  .getElementById('saveNewItem')
  .addEventListener('click', function(event) {
    event.preventDefault();
    const task = document.getElementById('newItemInput').value.trim();
    addTask(task);
  });

