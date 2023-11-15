const arrayElement = Array.from(document.querySelectorAll(".rotator__case"));
setInterval(() => {
    for(let i = 0; i<arrayElement.length; i++){
        if(arrayElement[i].classList.contains("rotator__case_active")) {
            arrayElement[i].classList.remove("rotator__case_active");
         }else{
            arrayElement[i].classList.add("rotator__case_active");
         }
        }             
        },1000);