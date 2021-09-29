// import _ from 'lodash';
import './style.css';

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
  const para = document.createElement('p');
  para.innerText = element.description;
  const container = document.getElementById('list-container');
  container.appendChild(para);
});