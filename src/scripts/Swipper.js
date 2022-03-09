// Codes By Mahdi Tasha
const swiper_1 = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper_2 = new Swiper(".swiper-slider-per-view", {
    slidesPerView: 6,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});