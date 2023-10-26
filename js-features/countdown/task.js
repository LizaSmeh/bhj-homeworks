const startingValue = document.getElementById("timer");

const countTime = function(){
    if(startingValue.textContent > 0){
        startingValue.textContent--;
          }else if(startingValue.textContent === "0"){
            alert("Вы победили в конкурсе!");
          }
    }

setInterval(countTime, 1000);
