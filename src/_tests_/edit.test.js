/**
 * @jest-environment jsdom
 */

import localStorageMock from '../_mocks_/localStorage.js';
import editItem from '../_mocks_/edit.js';

describe('Edit tasks descriptions', () => {
  const taskList = [
    {
      description: 'Breaking Bad',
      completed: false,
      index: 1,
    },

    {
      description: 'Squid games',
      completed: false,
      index: 2,
    },
  ];

  test('change the description of Breaking Bad to Game of Thrones', () => {
    const element = taskList[0];
    document.body.innerHTML = '<input class="edit-item" value="Game of Thrones">';
    editItem(element, taskList);
    expect(element.description).toBe('Game of Thrones');
  });

  test('Local storage should not change', () => {
    expect(localStorageMock.getItem('data')[0].description).toBe('Game of Thrones');
  });

  test('change the description of Squid games to Into the badlands', () => {
    const element = taskList[1];
    document.body.innerHTML = '<input class="edit-item" value="Into the badlands">';
    editItem(element, taskList);
    expect(element.description).toBe('Into the badlands');
  });
});
