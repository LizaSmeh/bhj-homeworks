const hasTooltips = document.querySelectorAll(".has-tooltip");
for(let hasTooltip of hasTooltips){
hasTooltip.addEventListener("click", (event) => {
    event.preventDefault();
    const div = document.createElement("div");
    hasTooltip.appendChild(div);
    div.classList.add("tooltip");
    div.textContent = hasTooltip.getAttribute("title");
    div.classList.add("tooltip_active");
    const tooltipActive = hasTooltip.querySelector(".tooltip_active");
    /*if(tooltipActive){
    tooltipActive.remove();
      }

    */

})
}