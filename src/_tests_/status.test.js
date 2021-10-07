/**
 * @jest-environment jsdom
 */

 import localStorageMock from '../_mocks_/localStorage.js';
 import status from '../_mocks_/status.js';
 
 describe('Change the completed key of tasks', () => {
   const taskList = [
    {
      description: 'Into the badlands',
      completed: true,
      index: 1,
    },

    {
      description: 'Game of Thrones',
      completed: false,
      index: 2,
    },
  ];

   test('change the completed key of the first element to false', () => {
     const element = taskList[0]
     const checkbox = document.createElement('checkbox')
    checkbox.checked = false
     status(checkbox, element, taskList) 
     expect(element.completed).toBe(false);
   });
 
   test('completed key of first element should change to false in local storage', () => {
     expect(localStorageMock.getItem('data')[0].completed).toBe(false);
   });

   test('change the completed key of the second element to true', () => {
    const element = taskList[1]
    const checkbox = document.createElement('checkbox')
    checkbox.checked = true
    status(checkbox, element, taskList) 
    expect(element.completed).toBe(true);
  });
 });
 