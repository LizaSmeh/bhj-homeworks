const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');


form.addEventListener('submit', event => {
    event.preventDefault();

    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    request.upload.onprogress = function(event) {
        progress.value = event.loaded / 1000000;
    }

    request.send(new FormData(form));
});

