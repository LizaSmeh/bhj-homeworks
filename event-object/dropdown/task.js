const selectedValue = document.querySelector(".dropdown__value"); 
const arrayValues = Array.from(document.querySelectorAll(".dropdown__link"));
const menuValues = document.querySelector(".dropdown__list");

for(let i = 0; i< arrayValues.length; i++){
    arrayValues[i].onclick = function(){
        selectedValue.textContent = arrayValues[i].textContent;
        return false;
    }
    arrayValues[i].addEventListener("click", closeMenuValues);
}

function closeMenuValues (){
    menuValues.classList.contains("dropdown__list_active") ? menuValues.classList.remove("dropdown__list_active") : menuValues.classList.add("dropdown__list_active");
}
selectedValue.addEventListener("click", closeMenuValues);

