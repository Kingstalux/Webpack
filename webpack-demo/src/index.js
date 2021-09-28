// import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'wash the dishers',
    completed: false,
    index: 1,
  },

  {
    description: 'do the laundry',
    completed: false,
    index: 2,
  },

  {
    description: 'clean the windows',
    completed: false,
    index: 3,
  },
];

tasks.forEach((element) => {
  const para1 = document.createElement('p');
  para1.innerText = element.description;
  const container = document.getElementById('list-container');
  container.appendChild(para1);
});