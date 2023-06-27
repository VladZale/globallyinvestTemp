var swiper = new Swiper(".mediaSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1030: {
            slidesPerView: 3,
            spaceBetween: 40
        }

    }
});