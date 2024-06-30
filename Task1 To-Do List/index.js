function addTask() {
  const taskInput = document.getElementById('task');
  const importantCheckbox = document.getElementById('important');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();
  const isImportant = importantCheckbox.checked;

  if (taskText === '') {
      alert('Please enter a task.');
      return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'taskText';
  span.textContent = taskText;

  const taskInputField = document.createElement('input');
  taskInputField.type = 'text';
  taskInputField.className = 'taskInputField';
  taskInputField.style.display = 'none';

  const btnContainer = document.createElement('div');
  btnContainer.className = 'btnContainer';

  const doneBtn = document.createElement('button');
  doneBtn.id = 'donebtn';
  doneBtn.textContent = 'Done';
  doneBtn.onclick = function () { Done(this); };
  
  const editBtn = document.createElement('button');
  editBtn.id = 'editbtn';
  editBtn.textContent = 'Edit';
  editBtn.onclick = function() { editTask(this); };

  const rmvBtn = document.createElement('button');
  rmvBtn.id = 'rmvbtn';
  rmvBtn.textContent = 'Delete';
  rmvBtn.onclick = function() { deleteTask(this); };

  btnContainer.appendChild(doneBtn);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(rmvBtn);

  li.appendChild(span);
  li.appendChild(taskInputField);
  li.appendChild(btnContainer);

  if (isImportant) {
    li.classList.add('important');
    taskList.insertBefore(li, taskList.firstChild);
} else {
    taskList.appendChild(li);
}
  taskInput.value = '';
  importantCheckbox.checked = false;
}

function Done(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.querySelector('.taskText');
  
  if (button.textContent === 'Done') {
      taskText.style.textDecoration = 'line-through 2px blue';
      button.style.backgroundColor = 'rgb(71, 224, 219)';
      button.textContent = 'Cancel Done';
  } else {
      taskText.style.textDecoration = 'none';
    button.textContent = 'Done';
    button.style.backgroundColor = 'yellow';
  }
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const taskText = li.querySelector('.taskText');
  const taskInputField = li.querySelector('.taskInputField');
  const doneBtn = li.querySelector('#donebtn');
  const rmvBtn = li.querySelector('#rmvbtn');
  
  if (button.textContent === 'Edit') {
      taskInputField.value = taskText.textContent;
      taskText.style.display = 'none';
      taskInputField.style.display = 'block';
      button.textContent = 'Save';
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
      doneBtn.style.display = 'none';
      rmvBtn.style.display = 'none';
  }
  else
  {
    const newTask = taskInputField.value.trim();
    if (newTask === '') {
      alert('Task cannot be empty.');
      return;
    }
    
    taskText.textContent = newTask;
    taskText.style.display = 'block';
    taskInputField.style.display = 'none';
    button.textContent = 'Edit';
    button.style.backgroundColor = 'rgb(0, 149, 255)';
    doneBtn.style.display = 'inline-block';
    rmvBtn.style.display = 'inline-block';
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
