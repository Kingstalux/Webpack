import localStorageMock from './localStorage.js';

function editItem(element, taskList) {
    const input = document.querySelector('.edit-item');
    element.description = input.value;  
    localStorageMock.setItem('data', taskList);
}

export default editItem;
