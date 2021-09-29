// import _ from 'lodash';
import './style.css';
import { status } from'./script.js';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },

  {
    description: 'do the laundry',
    completed: false,
    index: 2,
  },

  {
    description: 'wash the car',
    completed: false,
    index: 3,
  },
];

tasks.forEach((element) => {
  const div = document.createElement('div');
  div.className = 'task';
  const container = document.getElementById('list-container');
  container.appendChild(div);
  const div2 = document.createElement('div');
  div2.className = 'div';
  div.appendChild(div2);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'check'
  div2.appendChild(checkbox);
  const para = document.createElement('p');
  para.innerText = element.description;
  div2.appendChild(para);
  checkbox.addEventListener('click', () => {
    status(checkbox, element)
    if (checkbox.checked == true) {
      para.classList.add('cancel')
      // element.completed = true
      console.log(element);
    } else {
      para.classList.remove('cancel')
      // element.completed = false
      console.log(element);
    }
  })
  const icon = document.createElement('i');
  icon.className = 'ellipsis vertical icon';
  div.appendChild(icon);
  const hr = document.createElement('hr');
  container.appendChild(hr);
});

