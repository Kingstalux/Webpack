/**
 * @jest-environment jsdom
 */

import localStorageMock from '../_mocks_/localStorage.js';
import removeItem from '../_mocks_/remove.js';

describe('Remove tasks from list', () => {
  const taskList = [
    {
      description: 'Breaking Bad',
      completed: false,
      index: 1,
    },

    {
      description: 'Into the badlands',
      completed: false,
      index: 2,
    },

    {
      description: 'Game of Thrones',
      completed: false,
      index: 3,
    },
  ];

  test('index of Game of Thrones (third item) is 3', () => {
    const element = taskList[2];
    expect(element.index).toBe(3);
  });

  test('remove Into the Badlands (second item) from the array', () => {
    const element = taskList[1];
    expect(removeItem(element, taskList)).toHaveLength(2);
  });

  test('Local storage should be updated after removing second item', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(2);
  });

  test('index of Game of Thrones (now the second element) should update to 2', () => {
    const element = taskList[1];
    expect(element.index).toBe(2);
  });
});
