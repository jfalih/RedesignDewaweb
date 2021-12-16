
window.addEventListener('load', function(){
    let list_product = document.getElementById('list-product');
    let product_button_left = document.getElementById('product-button-left');
    let product_button_right = document.getElementById('product-button-right');
    product_button_left.addEventListener('click', function(e){
        e.preventDefault();
        list_product.scrollLeft -= 100
    });
    product_button_right.addEventListener('click', function(e){
        e.preventDefault();
        list_product.scrollLeft += 100
    })
});