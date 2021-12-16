let sidebar = document.getElementById('sidebar');
let open_toggle = document.getElementById('open-toggle');
let close_toggle = document.getElementById('close-toggle');
open_toggle.addEventListener('click', function(e){
    e.preventDefault();
    sidebar.classList.add('active');
});
close_toggle.addEventListener('click', function(e){
    e.preventDefault();
    sidebar.classList.remove('active');
})