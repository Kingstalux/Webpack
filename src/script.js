export function status (checkbox, element) {
    if (checkbox.checked == true) {
        element.completed = true
      } else {
        element.completed = false
      }
}