const burger_button = document.querySelector('.burger');
const burger_open = document.querySelector('.container_nav');
const nav = document.querySelector('.header_nav')
const body = document.body;

//При клике выйдет поп ап
burger_button.addEventListener('click', burger_wake_up);

function burger_wake_up() {
    burger_button.classList.toggle("burger_cross");  
    burger_open.classList.toggle("open_menu_burger"); 
    body.classList.toggle("no_scroll_body"); 
}

//закрываем его
nav.addEventListener('click', burger_close);
function burger_close() {
    burger_open.classList.remove("open_menu_burger"); 
    burger_button.classList.remove("burger_cross"); 
    body.classList.remove("no_scroll_body"); 
}  


