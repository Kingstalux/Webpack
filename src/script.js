export default function status(checkbox, element, taskList) {
  const i = element.index;
  if (checkbox.checked === true) {
    element.completed = true;
    taskList[i - 1].completed = true;
  } else {
    element.completed = false;
    taskList[i - 1].completed = false;
  }
}