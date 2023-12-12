const question = document.querySelector('.poll__title');
const answer = document.querySelector('.poll__answers ');

let request = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.addEventListener('readystatechange',() => {
    if(request.readyState === request.DONE) {
        let baseDate = JSON.parse(request.responseText).data;
        question.innerHTML = baseDate.title;

        for(let item of baseDate.answers) {
            answer.insertAdjacentHTML('beforeend', 
              `<button class="poll__answer">
                       ${item}
                </button>`);

        }

        const answerbtn = document.querySelectorAll('.poll__answer');

        for(let item of answerbtn) {
            item.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }

    }
});

request.send();