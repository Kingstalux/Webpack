import localStorageMock from './localStorage.js';

function status(checkbox, element, taskList) {
  const i = element.index;
  if (checkbox.checked === true) {
    element.completed = true;
    taskList[i - 1].completed = true;
    localStorageMock.setItem('data', taskList);
  } else {
    element.completed = false;
    taskList[i - 1].completed = false;
    localStorageMock.setItem('data', taskList);
  }
  return taskList;
}

export default status;
