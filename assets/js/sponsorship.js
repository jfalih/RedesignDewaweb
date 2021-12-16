
window.addEventListener('load', function(){
    let list_event = document.getElementById('list-event');
    let event_button_left = document.getElementById('event-button-left');
    let event_button_right = document.getElementById('event-button-right');
    event_button_left.addEventListener('click', function(e){
        e.preventDefault();
        list_event.scrollLeft -= 100
    });
    event_button_right.addEventListener('click', function(e){
        e.preventDefault();
        list_event.scrollLeft += 100
    })
});