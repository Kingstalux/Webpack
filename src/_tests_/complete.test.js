// Completed.test
/**
 * @jest-environment jsdom
 */

import localStorageMock from '../_mocks_/localStorage.js';
import clearCompleted from '../_mocks_/completed.js';

describe('Remove completed tasks from list', () => {
  const taskList = [
    {
      description: 'Breaking Bad',
      completed: true,
      index: 1,
    },

    {
      description: 'Into the badlands',
      completed: true,
      index: 2,
    },

    {
      description: 'Game of Thrones',
      completed: false,
      index: 3,
    },
  ];
  test('should return an array without completed tasks', () => {
    expect(clearCompleted(taskList)).toHaveLength(1);
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('data')).toStrictEqual(clearCompleted(taskList));
  });
});