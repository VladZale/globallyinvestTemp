@@include('common/variables.js')
@@include('common/langProcessing.js')
let test
@@include('common/config.js')

let pathname = document.location.pathname.replace(/[\.\/]/g, '').replace("html", '');

function get_name_browser() {
    let ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';

    return 'Не определен';
}

const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
}

let browser = get_name_browser();

if (browser === 'Firefox') {
    document.body.classList.add('moz')
}

let last_known_scroll_position = 0;
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
const header = document.querySelector('.header');

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (last_known_scroll_position > 300) {
        window.requestAnimationFrame(function () {
            scrollToTopBtn.style.opacity = 1;
            scrollToTopBtn.style.zIndex = 999;
            scrollToTopBtn.addEventListener("click", scrollToTop);
        });
    } else {
        scrollToTopBtn.style.opacity = 0;
        scrollToTopBtn.style.zIndex = -1;

    }
});

if (pathname.toLowerCase() !== 'accounttypes') {
    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;

        if (last_known_scroll_position > 100) {
            window.requestAnimationFrame(function () {

                header.classList.add('_active');
            });
        } else {
            header.classList.remove('_active');
        }
    });
}

if (pathname.toLowerCase() === 'accounttypes'){
    header.classList.add('_active');
}

document.addEventListener("DOMContentLoaded", function () {
    const yrSpan = document.querySelector('.footer__date');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
});

@@include('header.js')

const assets = ["Forex", "Stocks", "Crypto", "Metals", "Indices", "Commodities", "NFT"]

if (pathname === '' || pathname === 'index') {
@@include('accordeon.js')
@@include('form.js')
@@include('popup.js')
@@include('Widgets/WidgetsGradient.js')
}
for (let i = 0; i < assets.length; i++) {
    if (pathname === assets[i]) {
    @@include('pageWidget.js')
    break
    }
}


@@include('test.js')