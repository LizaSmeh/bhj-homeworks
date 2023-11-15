window.addEventListener("scroll", function(){
    const insertedBlock = Array.from(document.querySelectorAll(".reveal"));
    const visibleArea = window.innerHeight;
    for(let i = 0; i<insertedBlock.length; i++){
    const { top, bottom } = insertedBlock[i].getBoundingClientRect();
    if(top > visibleArea && bottom < 0){
        insertedBlock[i].classList.remove('reveal_active');
    } else {
        insertedBlock[i].classList.add('reveal_active');
    }
    }
}); 