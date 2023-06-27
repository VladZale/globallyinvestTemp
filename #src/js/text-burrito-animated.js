img = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-burrito-animated",
        start: "top +=50%",
        end: "top +=50%",
        toggleActions: "play none reverse",
    }
})
    .from(".text-burrito-animated__img img", {
        opacity:0,
        duration:2,
    })
    .from(".text-burrito-animated__box img", {
        bottom:"-140%",
        duration:2,
    },"-=4")