const prevButton = document.querySelector('.arrow_left');
const nextButton = document.querySelector('.arrow_right');
const sliderLine = document.querySelector('.sliderLine');
const dots = document.querySelectorAll('.slider_line');


let position = 0;
let dotIndex = 1;

//Двигает вправо
const nextSlider = () => {
    if (position <= 0) {
    position += 100;
    dotIndex ++;
    } else {
        position = -100;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + '%';
    ThisSlide(dotIndex);
}
//Двигает влево
const prevSlider = () => {
    if (position >= 0) {
    position -= 100;
    dotIndex --;
    } 
    else {
        position = 100;
        dotIndex = 2;
    }
    sliderLine.style.left = -position + '%';
    ThisSlide(dotIndex);
}

//Кнопки
nextButton.addEventListener('click', nextSlider);
prevButton.addEventListener('click', prevSlider);


//Индикация
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        //тут функция
    })
})

function ThisSlide (index) {
    dots.forEach(item => item.classList.remove('slider_line_special'));
    dots[index].classList.add('slider_line_special');
} 


//Автоматически листается
setInterval(nextSlider, 5000)