// navbar

let navbar = document.querySelector('nav');

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

// search bar


let search = document.querySelector('form');

document.querySelector('#search-bar').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// yoga_gallery-container swiper

var swiper = new Swiper(".yoga_gallery-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
