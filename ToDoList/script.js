const inputbox = document.getElementById("input-box");
const list = document.getElementById("list");

function Addtask() {
  if (inputbox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode ×
    li.appendChild(span);

    list.appendChild(li);
    SaveDate();
  }

  inputbox.value = "";
}

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    SaveDate();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    SaveDate();
  }
}, false);

function SaveDate() {
  localStorage.setItem("data", list.innerHTML);jj
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
