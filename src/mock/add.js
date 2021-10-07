import localstorageMock from './localstorage.js';

const addItem = (taskList) => {
  const newItem = document.querySelector('.new-item').value;
  const i = taskList.length;
  const element = {
    description: newItem,
    completed: false,
    index: i + 1,
  };
  taskList.push(element);
  localstorageMock.setItem('data', taskList);
  // display(element);
  return taskList;
};

export default addItem;
