
const form = document.getElementById('signin__form');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const userName = welcome.querySelector('#user_id');


form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const request = new XMLHttpRequest();

    request.open('Post', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.responseType = 'json';
    request.onload = function() {        
        if(request.response.success){
            const userId = request.response.user_id;
            localStorage.setItem('userId', userId);
            welcomePage(userId);        
        }else{
            alert('Неверный логин или пароль')
        }
    }
    
    request.send(formData);
    form.reset();
});


window.addEventListener('DOMContentLoaded', () => {
    const userGet = localStorage.getItem('userId');
    if(userGet) {
        welcomePage(userGet);
    }
});

function welcomePage(userId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userName.textContent = userId;
}

    
