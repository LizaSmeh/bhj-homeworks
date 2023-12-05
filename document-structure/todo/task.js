const tasksList = document.querySelector(".tasks__list");
const tasksIinput = document.querySelector(".tasks__input");
const btnTask = document.querySelector(".tasks__add");

btnTask.addEventListener('click', event => {
  event.preventDefault();
   const inputTrim = tasksIinput.value.trim();
    if (inputTrim != '') {
      tasksList.insertAdjacentHTML("afterBegin", 
            `<div class="task">
                <div class="task__title">
                ${tasksIinput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
            tasksIinput.value = '';
       
        const remove = document.querySelector(".task__remove");
        const task = document.querySelector(".task");
    
        
        remove.addEventListener('click', event => {
            event.preventDefault();
            task.remove();
        });

    } else {
      tasksIinput.value = '';
      return;
      
    } 
})