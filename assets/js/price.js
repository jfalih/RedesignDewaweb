
window.addEventListener('load', function(){
    let list_price = document.getElementById('list-price');
    let price_button_left = document.getElementById('price-button-left');
    let price_button_right = document.getElementById('price-button-right');
    price_button_left.addEventListener('click', function(e){
        e.preventDefault();
        list_price.scrollLeft -= 100
    });
    price_button_right.addEventListener('click', function(e){
        e.preventDefault();
        list_price.scrollLeft += 100
    })
});