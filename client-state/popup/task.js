const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

const getCookie = name => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if( parts.length === 2){
        return parts.pop().split(';').shift();
    }
}

if(!getCookie('closed')){
    modal.classList.add('modal_active');
  
}

modalClose.addEventListener('click', event => {
   event.preventDefault();
   document.cookie = 'closed=' + encodeURIComponent('true');
    modal.classList.remove('modal_active');
    

})
 



