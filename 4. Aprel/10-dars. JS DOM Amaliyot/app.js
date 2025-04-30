/**
 * Counter app
 */

const numberElement = document.querySelector(".number");
const container = document.querySelector(".container");
const buttonGroup = document.querySelector(".button-group");
let count = 0;
buttonGroup.addEventListener("mousedown", changeNumber);

function changeNumber(event) {
  console.log(event);
  if (event.target.id === "plus") count++;
  if (event.target.id === "minus") count--;
  if (count < 0) {
    numberElement.style.color = "red";
    container.style.borderColor = "red";
  } else if (count > 0) {
    numberElement.style.color = "green";
    container.style.borderColor = "green";
  } else {
    numberElement.style.color = "inherit";
    container.style.borderColor = "inherit";
  }
  numberElement.textContent = count;
}
