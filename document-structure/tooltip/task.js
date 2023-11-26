const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));



hasTooltips.forEach(hasTooltip => {
hasTooltip.addEventListener("click", (event) => {
    event.preventDefault();
  
    hasTooltip.insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
    
    const div = document.querySelector(".tooltip");
    div.textContent = hasTooltip.getAttribute("title");
    
    
    const coordinates = hasTooltip.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.pageYOffset;
    const coordinatesLeft = coordinates.left + window.pageXOffset;
    div.style.top = coordinatesTop + coordinates.height + 'px';
    div.style.left = coordinatesLeft + 'px';

   if(div.classList.contains("tooltip_active")){
      div.classList.remove("tooltip_active");
    }else {
      div.classList.add("tooltip_active");
    }



  
})
})