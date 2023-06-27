var swiper = new Swiper(".hero-slider__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.hero-slider__next',
        prevEl: '.hero-slider__prev',
    },
    autoplay:true,
    speed:1500,
    loop:true
});


swiper.on('slideChange', function() {
    const index = document.getElementById('index')
    index.innerText = swiper.realIndex + 1
});
