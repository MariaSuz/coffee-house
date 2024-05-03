//Меню
const Tea =  document.querySelector('#tea-menu');
const Coffee = document.querySelector("#coffe-menu");
const Desert = document.querySelector("#dessert-menu");
//Кнопки
const ButTea =  document.querySelector('#but-tea');
const ButCoffee = document.querySelector("#but-coffee");
const ButDesert = document.querySelector("#but-dessert");
//
const changes = document.querySelectorAll('.changes');

//Слушатели
ButCoffee.addEventListener('click', CoffesMenus);
ButDesert.addEventListener('click', DessertsMenus);
ButTea.addEventListener('click', TeasMenus);

//основное, главное (импровизация)

function CoffesMenus () {
    CleanMenus ();
    CleanButtosClass ();
    Coffee.classList.remove("block-off");
    ButCoffee.classList.add("special_button_sweet");
    OpenLoad ()
}

function TeasMenus () {
    CleanMenus ();
    CleanButtosClass ();
    Tea.classList.remove("block-off"); 
    ButTea.classList.add("special_button_sweet");
    LoadEvents()
}


function DessertsMenus () {
    CleanMenus ();
    CleanButtosClass ();
    Desert.classList.remove("block-off");
    ButDesert.classList.add("special_button_sweet");   
    OpenLoad ()
}

//Перед началом прячем все
function CleanMenus () {
    Coffee.classList.add("block-off");
    Tea.classList.add("block-off"); 
    Desert.classList.add("block-off");
}

//Чистка кнопки
function CleanButtosClass () {
    ButCoffee.classList.remove("special_button_sweet");
    ButTea.classList.remove("special_button_sweet"); 
    ButDesert.classList.remove("special_button_sweet");
}


//Классная штука, при загрузке включаю функцию
window.onload = function () {
    CoffesMenus ()
}

//Загрузить ещё
const Load = document.querySelector(".button_load_menu");
const ButLoad = document.querySelector(".but_load");

ButLoad.addEventListener('click', LoadEvents);

function LoadEvents() {
   // Images.removeChild(Images);
   Load.style.display = 'none';
   document.querySelector(".changes:nth-child(5)").style.display = 'block';
   document.querySelector(".changes:nth-child(6)").style.display = 'block';
   document.querySelector(".changes:nth-child(7)").style.display = 'block';
   document.querySelector(".changes:nth-child(8)").style.display = 'block';
}

function OpenLoad () {
    Load.style.display = 'block';

    AllCanges ();
  //  document.querySelector(".changes:nth-child(5)").style.display = 'none';
  //  document.querySelector(".changes:nth-child(6)").style.display = 'none';
  //  document.querySelector(".changes:nth-child(7)").style.display = 'none';
  //  document.querySelector(".changes:nth-child(8)").style.display = 'none';
}

function AllCanges (index) {
    changes.forEach(item => item.classList.remove('nth-child'));
   // changes[index].classList.add('сarousel_dot_button_active');
} 