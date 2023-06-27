"use strict"


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const multiMenu = document.querySelectorAll("ul[data-menu]")

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        if(!header.classList.contains('_active')){
            header.classList.toggle('_active');
        }
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });

    function onMenuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const mouseMenu = (el) => {
    el.addEventListener("mouseover", (e) => {
        e.preventDefault()
        el.classList.add("active")
    })
    el.addEventListener("mouseleave", (e) => {
        e.preventDefault()
        el.classList.remove("active")
    })
}

let faq = document.querySelectorAll('[data-faq]')
let contacts = document.querySelectorAll('[data-contacts]')

if (pathname === "" || pathname === "/") {
    const home = document.getElementById('home')
    home.classList.toggle("active-page")
    home.addEventListener('click', scrollToTop)
    faq.forEach(el => {
        el.href = "#faq"
    })
    contacts.forEach(el => {
        el.href = "#contacts"
    })
} else {
    faq.forEach(el => {
        el.href = "index.html#faq"
    })
    contacts.forEach(el => {
        el.href = "index.html#contacts"
    })
}
@@include('multiHeader.js')
