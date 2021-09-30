export const status = (checkbox, element, taskList) => {
  let i = element.index
  if (checkbox.checked === true) {
    element.completed = true;
    taskList[i].completed = true
  } else {
    element.completed = false;
    taskList[i].completed = false;
  }
}