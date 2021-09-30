// import _ from 'lodash';
import './style.css';
import status from './script.js';
import addItem from './script2.js';

let taskList = JSON.parse(localStorage.getItem('tasks'));

if (taskList === null) {
  taskList = [];
}

const display = () => {
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
    icon.addEventListener('click', () => {
      console.log('yess');
    })
    div.appendChild(icon);
    const hr = document.createElement('hr');
    container.appendChild(hr);
  });
}

display()

const newItem = document.querySelector('.new-item')

newItem.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addItem(taskList)
    document.querySelector('.new-item').value = ''
    localStorage.setItem('tasks', JSON.stringify(taskList));
    taskList = JSON.parse(localStorage.getItem('tasks'));
    window.location.reload()
    // document.getElementById("myBtn").click();
   }
})