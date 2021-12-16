
window.addEventListener('load', function(){
   
    let list_milestone = document.getElementById('list-milestone');
    let milestone_button_left = document.getElementById('milestone-button-left');
    let milestone_button_right = document.getElementById('milestone-button-right');
    milestone_button_left.addEventListener('click', function(e){
        e.preventDefault();
        list_milestone.scrollLeft -= 100
    });
    milestone_button_right.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Hello")
        list_milestone.scrollLeft += 100
    })
});