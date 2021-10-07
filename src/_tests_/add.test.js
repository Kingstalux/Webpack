/**
 * @jest-environment jsdom
 */

import localStorageMock from '../_mocks_/localStorage.js';
import addItem from '../_mocks_/add.js';

describe('Add tasks to list', () => {
  const taskList = [];
  test('should return an array of tasks with task object', () => {
    document.body.innerHTML = '<input class="new-item" value="Fix the car">';
    expect(addItem(taskList)).toHaveLength(1);
  });

  test('Local storage should be updated after adding new item', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(1);
  });

  test('Should return an array with attached todo object', () => {
    document.body.innerHTML = '<input class="new-item" value="Complete the project">';
    expect(addItem(taskList)).toHaveLength(2);
  });

  test('The new task completed status should be false', () => {
    expect(taskList[0].completed).toBe(false);
  });

  test('The index of the second task should be 2', () => {
    expect(taskList[1].index).toBe(2);
  });
});
