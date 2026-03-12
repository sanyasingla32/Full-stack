const taskNameInput = document.getElementById("taskName");
const prioritySelect = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

const showAllBtn = document.getElementById("showAll");
const showCompletedBtn = document.getElementById("showCompleted");
const showPendingBtn = document.getElementById("showPending");


addTaskBtn.addEventListener("click", function () {

    const taskName = taskNameInput.value;
    const priority = prioritySelect.value;

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.innerText = taskName + " (" + priority + ") ";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }

    });

    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    taskNameInput.value = "";

});


showAllBtn.addEventListener("click", function () {

    const tasks = document.querySelectorAll(".task");

    tasks.forEach(function (task) {
        task.style.display = "block";
    });

});


showCompletedBtn.addEventListener("click", function () {

    const tasks = document.querySelectorAll(".task");

    tasks.forEach(function (task) {

        const checkbox = task.querySelector("input");

        if (checkbox.checked) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }

    });

});


showPendingBtn.addEventListener("click", function () {

    const tasks = document.querySelectorAll(".task");

    tasks.forEach(function (task) {

        const checkbox = task.querySelector("input");

        if (!checkbox.checked) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }

    });

});

