export function addItem(taskList, display) {
  const newItem = document.querySelector('.new-item').value;
  const i = taskList.length;
  const element = {
    description: newItem,
    completed: false,
    index: i + 1,
  };
  taskList.push(element);
  display(element);
}

export function editItem(spam, spam2, input, para, element, taskList) {
  spam.classList.add('hidden');
  spam2.classList.remove('hidden');
  input.classList.remove('hidden');
  para.classList.add('hidden');
  input.value = element.description;
  document.getElementById(element.index).classList.add('color');
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      element.description = input.value;
      para.innerText = element.description;
      localStorage.setItem('tasks', JSON.stringify(taskList));
      taskList = JSON.parse(localStorage.getItem('tasks'));
      spam.classList.remove('hidden');
      spam2.classList.add('hidden');
      input.classList.add('hidden');
      para.classList.remove('hidden');
      document.getElementById(element.index).classList.remove('color');
    }
  });
}

export function removeItem(element, taskList) {
  const i = element.index;
  taskList = taskList.filter((element) => element.index !== i);
  taskList.forEach((element) => {
    const int = taskList.indexOf(element);
    element.index = int + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
  taskList = JSON.parse(localStorage.getItem('tasks'));
  window.location.reload();
}

export function clearCompleted(taskList) {
  taskList = taskList.filter((element) => element.completed !== true);
  taskList.forEach((element) => {
    element.index = taskList.indexOf(element) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
  taskList = JSON.parse(localStorage.getItem('tasks'));
}