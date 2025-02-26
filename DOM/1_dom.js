// selecting the element by class name and converting it into an array and changing the color using forEach loop

const list = document.getElementsByClassName("classList");
Array.from(list).forEach((element) => {
  element.style.color = "red";
});
