import addItem from '../mock/add.js';
import localstorageMock from '../mocks/localstorage.js';

describe('Add tasks to list', () => {
    taskList = []
    test('should return an array of tasks with task object'), () => {
      document.body.innerHTML = '<input class="new-item" value="Something">';
      expect(addTask(arr)).toHaveLength(1);
    }
})














// describe('Add to-do', () => {
//     const arr = [];
//     test('Should return an array with attached todo object', () => {
//       document.body.innerHTML = '<input id="input-text" value="Something">';
//       expect(addTask(arr)).toHaveLength(1);
//     });
//     test('Local storage should be updated after adding new item', () => {
//       expect(localStorageMock.getItem('data')).toHaveLength(1);
//     });
//     test('Should return an array with attached todo object', () => {
//       document.body.innerHTML = '<input id="input-text" value="Something">';
//       expect(addTask(arr)).toHaveLength(2);
//     });
//     test('The new task completed status should be false', () => {
//       expect(arr[0].completed).toBe(false);
//     });
//   });