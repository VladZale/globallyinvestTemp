gsap.timeline({
    scrollTrigger: {
        trigger: ".features-phone-laying",
        start: "top+=50% bottom",
        end: "bottom-=50% bottom",
        toggleActions: "play none reset",
    }
})

    .from(".features-phone-laying__image", {
        y: -600,
        opacity: 0,
        duration: 2
    })
    .from(".features-phone-laying__title", {
        opacity: 0,
        y: -20,
        duration: 1
    }, "-=1.7")
    .from(".features-phone-laying__desc", {
        opacity: 0,
        y: -20,
        duration: 1
    }, "-=1.5")
    .from(".features-phone-laying__item", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: .3
    }, "-=1.3")