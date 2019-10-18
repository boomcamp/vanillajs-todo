const list = [];

function Task(task){
    this.task = task;
    this.id = 'new';
}

// Creates a new Task
function addTask(task){
    if(task){
        const newTask = new Task(task);
        list.push(task);

        document.getElementById('newItemInput').value = '';

        const taskElem = document.createElement('li');
        taskElem.id = 'item';

        const item = document.getElementById('newList').appendChild(taskElem);
        
        item.innerHTML = `<a id="new" class="list-group-item">${newTask.task}</a>`;
    }
    newTaskForm.classList.toggle('hide');
} 

// Submit, Open and Close Form
document.getElementById('saveNewItem').addEventListener('click', function(event){
    event.preventDefault();
    const task = document.getElementById('newItemInput').value.trim();
    addTask(task);
});

document.getElementById('add-todo')
.addEventListener('click', function(event){
    newTaskForm.classList.toggle('hide');
});

document.getElementById('cancel').addEventListener('click', function(event){
    event.preventDefault();
    newTaskForm.classList.toggle('hide');
});


// UPDATE/MOVE LIST (New todos, In-Progress, Complete)
document.getElementById('newList').addEventListener('click', function(event){
    if(event.target.matches('a.list-group-item')){
        event.target.id = 'inProgress';
        document.getElementById('currentList').appendChild(event.target);
    }
});

document.getElementById('currentList').addEventListener('click', function(event){
    if(event.target.matches('a.list-group-item')){
        event.target.id = 'archived';
        document.getElementById('archivedList').append(event.target);
    }
});

document.getElementById('archivedList').addEventListener('click', function(event) {
    if (event.target.matches('a.list-group-item')) {
      const itemText = event.target.innerText
      list.splice(list.findIndex(function(item) { return item.task === itemText }, 1))
      event.target.remove();
    }
  })