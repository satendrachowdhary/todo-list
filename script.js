var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  var del = document.createElement("button");
  del.textContent = "Delete";
  li[i].appendChild(del);
  del.addEventListener("click", () => {
    li[i].remove();
  });
}

ul.addEventListener("click", event => {
  event.target.classList.toggle("done");
});

function inputLength() {
  return input.value.trim().length > 0;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var del = document.createElement("button");
  del.textContent = "Delete";
  li.appendChild(del);
  del.addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
