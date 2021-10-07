import localStorageMock from './localStorage.js';

function addItem(taskList) {
  const newItem = document.querySelector('.new-item').value;
  const i = taskList.length;
  const element = {
    description: newItem,
    completed: false,
    index: i + 1,
  };
  taskList.push(element);
  localStorageMock.setItem('data', taskList);
  return taskList;
}

export default addItem;
