const loadingAnimation = document.querySelector('.loader');
const currencyRate = document.querySelector('.item');

let request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.addEventListener('readystatechange', () => {
    if(request.readyState === request.DONE){
        loadingAnimation.classList.remove('loader_active');
        
        let baseDate = JSON.parse(request.responseText).response.Valute;

        for(let item in baseDate) {
            currencyRate.insertAdjacentHTML('beforeend',
            `<div class="item__code">
            ${baseDate[item].CharCode}
        </div>
        <div class="item__value">
        ${baseDate[item].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>`);
        }
    }
});

request.send();
