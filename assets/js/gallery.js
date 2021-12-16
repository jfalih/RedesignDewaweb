
window.addEventListener('load', function(){
    let list_gallery = document.getElementById('list-gallery');
    let gallery_button_left = document.getElementById('gallery-button-left');
    let gallery_button_right = document.getElementById('gallery-button-right');
    gallery_button_left.addEventListener('click', function(e){
        e.preventDefault();
        list_gallery.scrollLeft -= 100
    });
    gallery_button_right.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Hello")
        list_gallery.scrollLeft += 100
    })
});