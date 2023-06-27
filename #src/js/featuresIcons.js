gsap.timeline({
    scrollTrigger: {
        trigger: ".features-icons-vertical",
        start: "top+=50% bottom",
        end: "bottom-=50% bottom",
        toggleActions: "play none reset",
        markers:true
    }

        .from(".features-icons-vertical::after", {
           width:100
        })
})