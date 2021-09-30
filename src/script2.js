export default function addItem (taskList) {
    const newItem = document.querySelector('.new-item').value
    let i = taskList.length
    const itemObj = {
        description: newItem,
        completed: false,
        index: i,
    }
    taskList.push(itemObj)
}

// export default function editItem () {

// }