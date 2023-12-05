const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltips[0].insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
const div = document.querySelector(".tooltip");

hasTooltips.forEach(hasTooltip => {
  hasTooltip.addEventListener("click", (event) => {
    event.preventDefault();
    const item = hasTooltip.getAttribute("title");

    if(div.textContent === item){
      div.classList.toggle("tooltip_active");
      return;
    }

    div.textContent = item;
    const coordinates = hasTooltip.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.pageYOffset;
    const coordinatesLeft = coordinates.left + window.pageXOffset;
    div.style.top = coordinatesTop + coordinates.height + 'px';
    div.style.left = coordinatesLeft + 'px';
    div.classList.add("tooltip_active");
  })
})