const clickСounter = document.getElementById("clicker__counter");
const imageCookie = document.getElementById("cookie");

const startingWidth = function(){
    imageCookie.width = 200;
}

imageCookie.onclick = function() {
    clickСounter.textContent++;
    imageCookie.width = 300;
    setTimeout(startingWidth, 50);
};


