// import _ from 'lodash';
import './style.css';
import status from './script.js';
import {
  addItem, editItem, removeItem, clearCompleted,
} from './script2.js';

let taskList = JSON.parse(localStorage.getItem('tasks'));

if (taskList === null) {
  taskList = [];
}

const display = (element) => {
  const div = document.createElement('div');
  div.className = 'task';
  div.id = element.index;
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
  checkbox.addEventListener('change', () => {
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
  icon.className = 'ellipsis vertical icon check2';
  const spam = document.createElement('spam');
  spam.appendChild(icon);
  div.appendChild(spam);
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'edit-item hidden';
  div.appendChild(input);

  const icon2 = document.createElement('i');
  icon2.className = 'trash alternate outline icon check';
  const spam2 = document.createElement('spam');
  spam2.className = 'hidden';
  spam2.appendChild(icon2);
  div.appendChild(spam2);
  const hr = document.createElement('hr');
  container.appendChild(hr);

  icon.addEventListener('click', () => {
    editItem(spam, spam2, input, para, element, taskList);
  });

  icon2.addEventListener('click', () => {
    removeItem(element, taskList);
  });
};

taskList.forEach((element) => {
  display(element);
});

document.getElementById('enter-icon').addEventListener('click', () => {
  addItem(taskList, display);
  document.querySelector('.new-item').value = '';
  localStorage.setItem('tasks', JSON.stringify(taskList));
  taskList = JSON.parse(localStorage.getItem('tasks'));
  window.location.reload();
});

document.querySelector('.new-item').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('enter-icon').click();
  }
});

document.querySelector('.button').addEventListener('click', () => {
  clearCompleted(taskList);
  window.location.reload();
});
