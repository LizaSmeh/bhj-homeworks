const arrayTabs = Array.from(document.querySelectorAll(".tab"));
const arrayContent = Array.from(document.querySelectorAll(".tab__content"));

for (let item of arrayTabs) {
    item.addEventListener("click", () => {
        arrayTabs.forEach(i => i.classList.remove("tab_active"));
        arrayContent.forEach(i => i.classList.remove("tab__content_active"));
        item.classList.add("tab_active");
        arrayContent[arrayTabs.indexOf(item)].classList.add("tab__content_active");
    });
  }