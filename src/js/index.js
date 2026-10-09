import Swiper from 'swiper';
import { Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import '../scss/style.scss';

let swiperBrands = null;
let swiperDevices = null;
let swiperPrice = null;

function initSwiper() {

    if (window.innerWidth < 768) {

        if (swiperBrands === null) {

            swiperBrands = new Swiper('.repair__section-brands .swiper', {
                modules: [Pagination, FreeMode],
                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
                slidesOffsetAfter: 50,

                freeMode: {
                    enabled: true,
                    sticky: false,
                    momentum: true,
                    momentumRatio: 1,
                },

                pagination: {
                    el: '.swiper-pagination-brands',
                    clickable: true,
                }
            });

        }

        if (swiperDevices === null) {

            swiperDevices = new Swiper('.repair__section-devices .swiper', {
                modules: [Pagination, FreeMode],

                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
                slidesOffsetAfter: 50,



                freeMode: {
                    enabled: true,
                    sticky: false,
                    momentum: true,
                    momentumRatio: 1,
                },

                pagination: {
                    el: '.swiper-pagination-devices',
                    clickable: true,
                }
            });

        }

        if (swiperPrice === null) {

            swiperPrice = new Swiper('.repair__section-price .swiper', {
                modules: [Pagination, FreeMode],

                direction: 'horizontal',
                slidesPerView: 'auto',
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
                slidesOffsetAfter: 30,



                freeMode: {
                    enabled: true,
                    sticky: false,
                    momentum: true,
                    momentumRatio: 1,
                },

                pagination: {
                    el: '.swiper-pagination-price',
                    clickable: true,
                }
            });

        }

    } else {

        if (swiperBrands !== null) {
            swiperBrands.destroy(true, true);
            swiperBrands = null;
        }

        if (swiperDevices !== null) {
            swiperDevices.destroy(true, true);
            swiperDevices = null;
        }

        if (swiperPrice !== null) {
            swiperPrice.destroy(true, true);
            swiperPrice = null;
}

    }
}

initSwiper();

window.addEventListener('resize', initSwiper);

const newElement = document.querySelectorAll('.repair__section-brands .swiper-none');
const newButton = document.querySelector('.repair__section-brands .swiper__btn-none');
const newText = document.querySelector('.repair__section-brands .swiper-btn-text');
const arrowBtn = document.querySelector('.repair__section-brands .swiper-btn-arrow')




newButton.addEventListener('click', () => { 

    const overtl = newElement[0].classList.contains('swiper-none');


    newElement.forEach(element => {

        if (overtl) {
            element.classList.remove('swiper-none');
        } else {
            element.classList.add('swiper-none');
        }


    });


    if (overtl) {
        newText.textContent = 'Скрыть все';

        arrowBtn.classList.add('arrow-rotate');

    } else {
        newText.textContent = 'Показать все';

        arrowBtn.classList.remove('arrow-rotate');


    }

});

const devicesElement = document.querySelectorAll('.repair__section-devices .swiper-none');
const devicesButton = document.querySelector('.repair__section-devices .swiper__btn-none');
const devicesText = document.querySelector('.repair__section-devices .swiper-btn-text');
const devicesBtn = document.querySelector('.repair__section-devices .swiper-btn-arrow')



devicesButton.addEventListener ('click' ,() => {

    const isHidden = devicesElement[0].classList.contains('swiper-none');

    devicesElement.forEach(element => {

        if(isHidden) {
            element.classList.remove ('swiper-none')

        }else {
            element.classList.add ('swiper-none')
        }
    });

    if (isHidden) {
       devicesText.textContent = 'Скрыть все'
       
       devicesBtn.classList.add ('arrow-rotate')

    }else {
        devicesText.textContent = 'Показать все'

        devicesBtn.classList.remove('arrow-rotate');
    }

});


const mainTabletText = document.querySelector('.main__text-tablet');
const mainComputerText = document.querySelector('.main__text-computer');
const mainButton = document.querySelector('.main__button');
const mainButtonText = document.querySelector('.main__btn-text');

mainButton.addEventListener('click', () => {
    mainTabletText.classList.toggle('is-visible');
    mainComputerText.classList.toggle('is-visible');

    const isVisible = mainComputerText.classList.contains('is-visible');

    mainButtonText.textContent = isVisible ? 'Скрыть' : 'Читать дальше';
});