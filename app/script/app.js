const list = [];
const newTaskForm = document.getElementById('newTaskForm')
newTaskForm.classList.toggle('hide');
completedTask.classList.toggle('hide');
    

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
          <a id="new" class="list-group-item text-blue">
            ${newTask.task}
          </a>
        `;

        const allElem = document.createElement('li');
        const allitem = document.getElementById('allList').appendChild(allElem)
        allitem.innerHTML =  
        ` <a class="list-group-item text-blue">
          ${newTask.task}
          </a>
        `
    }
    newTaskForm.classList.toggle('hide');
}




document.getElementById('newItemInput').addEventListener('keyup', function(key){  
  if(event.keyCode === 13){
    event.preventDefault();
    const task = document.getElementById('newItemInput').value.trim();
    addTask(task);
  }
})

document
  .getElementById('saveNewItem')
  .addEventListener('click', function(event) {
    event.preventDefault();
    const task = document.getElementById('newItemInput').value.trim();
    addTask(task);
  });


  document.getElementById('add-todo').addEventListener('click', function() {
    newTaskForm.classList.toggle('hide');
  });
  
  document.getElementById('logo-new-todo').addEventListener('click', function(event){
    event.preventDefault();
    completedTask.classList.toggle('hide');
  });

  document.getElementById('cancel').addEventListener('click', function(event) {
    event.preventDefault();
    newTaskForm.classList.toggle('hide');
  });

  document.getElementById('newList').addEventListener('click', function(event) {
    if (event.target.matches('a.list-group-item')) { 
      event.target.id = 'inProgress';
      event.target.classList = 'list-group-item text-green'
      document.getElementById('currentList').append(event.target);
    }
  });

  document
  .getElementById('currentList')
  .addEventListener('click', function(event) {
    if (event.target.matches('a.list-group-item')) {
      event.target.id = 'archived';
      event.target.classList = 'list-group-item text-red'
      document.getElementById('archivedList').append(event.target);
      
    }
  });

  document
  .getElementById('archivedList')
  .addEventListener('click', function(event) {
    if (event.target.matches('a.list-group-item')) {
      const itemText = event.target.innerText
      list.splice(list.findIndex(function(item) { return item.task === itemText }, 1))
      event.target.remove();
    }
    
    
  })


