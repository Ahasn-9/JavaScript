// selecting the element by class name and converting it into an array and changing the color using forEach loop

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}

addLanguage("JavaScript");
addLanguage("Java");
addLanguage("C++");

//edit
const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.innerHTML = "lhgkshgo";
secondLang.replaceWith(newLi);

//delete
const thirdLang = document.querySelector("li:nth-child(4)");
thirdLang.remove();
