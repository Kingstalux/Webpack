export default function status(checkbox, element, taskList) {
  const i = element.index;
  if (checkbox.checked === true) {
    element.completed = true;
    taskList[i].completed = true;
  } else {
    element.completed = false;
    taskList[i].completed = false;
  }
}