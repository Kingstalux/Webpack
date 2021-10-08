import localStorageMock from './localStorage.js';

function clearCompleted(taskList) {
  taskList = taskList.filter((element) => element.completed !== true);
  taskList.forEach((element) => {
    element.index = taskList.indexOf(element) + 1;
  });
  localStorageMock.setItem('data', taskList);
  taskList = localStorageMock.getItem('data');
  return taskList;
}

export default clearCompleted;