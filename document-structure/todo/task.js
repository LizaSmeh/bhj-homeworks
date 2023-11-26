const form = document.querySelector("form")
const tasks = document.querySelector(".tasks");
const btnTask = document.querySelector(".tasks__add");
const tasksIinput = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const div = document.createElement("div");
    tasksList.appendChild(div);
    div.classList.add("task");
    const div2 = document.createElement("div");
    div.appendChild(div2);
    div2.classList.add("task__title");
    const linkRemove = document.createElement("a");
    div.appendChild(linkRemove);
    linkRemove.href = `#`;
    linkRemove.classList.add("task__remove");
    linkRemove.innerHTML = `&times;`;
    if(tasksIinput.value !== "") {
        div2.textContent = tasksIinput.value;
    }
    form.reset();
    const arrayTask = Array.from(tasksList.querySelectorAll(".task__remove"));
    arrayTask.forEach(element => {
		element.addEventListener("click", (event) => {
        event.target.closest(".task").remove();

    });
    
})
})