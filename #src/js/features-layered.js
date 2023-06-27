gsap.timeline({
    scrollTrigger: {
        trigger: ".features-layered__inner",
        start: "top top",
        end: "bottom-=110% top-=200%",
        scrub: true,
        pin: true,
    }
})

    .from(".box1 img", {x: innerWidth * -1})
    .from(".info1 h2", {x: innerWidth * 2}, "-=0.5")


    .from(".box2 img", {x: innerWidth * -1})
    .from(".info2 h2", {x: innerWidth * 2}, "-=0.5")


    .from(".box3 img", {x: innerWidth * -1})
    .from(".info3 h2", {x: innerWidth * 2}, "-=0.5")


    .from(".box4 img", {x: innerWidth * -1})
    .from(".info4 h2", {x: innerWidth * 2}, "-=0.5")


    .from(".box5 img", {x: innerWidth * -1})
    .from(".info5 h2", {x: innerWidth * 2}, "-=0.5")
