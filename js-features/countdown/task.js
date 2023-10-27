const startingValue = document.getElementById("timer");

const countInterval = setInterval(function(){
  if(startingValue.textContent > 0){
      startingValue.textContent--;
        }else if(startingValue.textContent === "0"){
          alert("Вы победили в конкурсе!");
          clearInterval(countInterval);
        }
  }, 1000);

