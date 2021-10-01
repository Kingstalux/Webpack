export function addItem (taskList, display) {
    const newItem = document.querySelector('.new-item').value
    let i = taskList.length
    const element = {
        description: newItem,
        completed: false,
        index: i,
    }
    taskList.push(element)
    display(element)
}

export function editItem (spam, spam2, input, para, element) {
    spam.classList.add('hidden')
    spam2.classList.remove('hidden')
    input.classList.remove('hidden')
    para.classList.add('hidden')
    input.value = element.description
    // document.querySelector('.task').classList.add('color')
}

export function removeItem (element, taskList) {
    let i = element.index
    taskList.splice(i, 1)
    taskList.forEach(element => {
        element.index = taskList.indexOf(element)
    });
    
}