const numberMolesKilled = document.getElementById("dead"); 
const numberPromos = document.getElementById("lost"); 
const getHole = index => document.getElementById(`hole${index}`); 
for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            numberMolesKilled.textContent ++;
            if(+numberMolesKilled.textContent === 5){
                alert("Вы выиграли:)");
                numberMolesKilled.textContent = 0;
                numberPromos.textContent = 0;
            }
        } else {
            numberPromos.textContent++;
            if(+numberPromos.textContent === 10){
                alert("Вы проиграли:(");
                numberMolesKilled.textContent = 0;
                numberPromos.textContent = 0;
                
        };
        
    };
};
}
