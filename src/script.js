export const status = (checkbox, element, tasks) => {
  let i = element.index
  if (checkbox.checked === true) {
    element.completed = true;
    tasks[i].completed = true
  } else {
    element.completed = false;
    tasks[i].completed = false;
  }
}