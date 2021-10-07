import localStorageMock from './localStorage.js';

function removeItem(element, taskList) {
  const i = element.index;
  taskList = taskList.filter((element) => element.index !== i);
  taskList.forEach((element) => {
    const int = taskList.indexOf(element);
    element.index = int + 1;
  });
  localStorageMock.setItem('data', taskList);
  taskList = localStorageMock.getItem('data');
  return taskList;
}

export default removeItem;
