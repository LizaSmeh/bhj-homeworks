const btnsAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");
const productQquantityControl = document.querySelectorAll(".product__quantity-control");

productQquantityControl.forEach(item=>{
    item.addEventListener("click", (event) => {
        event.preventDefault();
      if(item.classList.contains("product__quantity-control_dec") && item.nextElementSibling.innerText > 1){
        item.nextElementSibling.innerText--;
     }else{
        item.previousElementSibling.innerText++;
     }
   
    })

})


btnsAdd.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const product = event.target.closest('.product');
        const img = product.querySelector('img').getAttribute('src');
        const id = product.getAttribute('data-id');
        const value = product.querySelector('.product__quantity-value');
        const valueText = +value.innerText;

        for(let item of cartProducts.children){
            
            if(item.getAttribute('data-id') === id){
                let valueNow = item.querySelector('.cart__product-count');
                let total = +valueNow.innerText;
                valueNow.innerText = total + valueText;
                        
              return;
            }
           
        }
       
        cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id = "${id}">
        <img class="cart__product-image" src = "${img}">
        <div class="cart__product-count">${valueText}</div>
    </div>`);

    
    })

})

