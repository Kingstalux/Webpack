// import _ from 'lodash';
import './style.css';
import status from './script.js';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },

  {
    description: 'do the laundry',
    completed: false,
    index: 1,
  },

  {
    description: 'wash the car',
    completed: false,
    index: 2,
  },
];

let taskList = JSON.parse(localStorage.getItem('tasks'));

if (taskList === null) {
  taskList = [...tasks];
}

taskList.forEach((element) => {
  const div = document.createElement('div');
  div.className = 'task';
  const container = document.getElementById('list-container');
  container.appendChild(div);
  const div2 = document.createElement('div');
  div2.className = 'div';
  div.appendChild(div2);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check';
  div2.appendChild(checkbox);
  const para = document.createElement('p');
  para.innerText = element.description;
  div2.appendChild(para);
  checkbox.addEventListener('click', () => {
    status(checkbox, element, taskList);
    if (checkbox.checked === true) {
      para.classList.add('cancel');
      localStorage.setItem('tasks', JSON.stringify(taskList));
      taskList = JSON.parse(localStorage.getItem('tasks'));
    } else {
      para.classList.remove('cancel');
      localStorage.setItem('tasks', JSON.stringify(taskList));
      taskList = JSON.parse(localStorage.getItem('tasks'));
    }
  });
  if (element.completed === true) {
    para.classList.add('cancel');
    checkbox.checked = true;
  } else {
    para.classList.remove('cancel');
    checkbox.checked = false;
  }
  const icon = document.createElement('i');
  icon.className = 'ellipsis vertical icon';
  div.appendChild(icon);
  const hr = document.createElement('hr');
  container.appendChild(hr);
});
