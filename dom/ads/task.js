let activePhrase = document.querySelector(".rotator__case_active");
const listPhrases = document.querySelector(".rotator");

setInterval(() => {
    activePhrase.classList.remove("rotator__case_active");
    if(activePhrase.nextElementSibling != null){
        activePhrase = activePhrase.nextElementSibling;
    } else{
        activePhrase = listPhrases.firstElementChild;
    }
    activePhrase.classList.add("rotator__case_active");
                    },1000);
