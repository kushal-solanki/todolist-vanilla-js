let inputs = document.getElementById("inp");
let text = document.getElementById("taskList");

// Load tasks from localStorage on page load
window.onload = function () {
  const savedData = localStorage.getItem("tasks");
  if (savedData) {
    text.innerHTML = savedData;
    addDeleteEventListeners();
  }
};

function Add() {
  if (inputs.value === "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    saveTasksToLocalStorage();
    inputs.value = "";
    addDeleteEventListeners();
  }
}

function deleteTask(taskElement) {
  taskElement.parentNode.remove();
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", text.innerHTML);
}

function addDeleteEventListeners() {
  let deleteIcons = document.querySelectorAll(".fa-trash");
  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      icon.parentNode.remove();
      saveTasksToLocalStorage();
    });
  });
}
