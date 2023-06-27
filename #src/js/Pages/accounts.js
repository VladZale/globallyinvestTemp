(function () {
    $("#header").addClass("_active")

    const colors = ["#00CA7E", "#DCF15C", "#C469DE","#D5C52A","#28C9CE","#FE8A61"]
    const links = document.querySelectorAll("[data-account]")

    links.forEach(el => {
        el.addEventListener("mouseover", () => {

            el.style.backgroundColor = colors[el.getAttribute("data-account")]
        })
        el.addEventListener("mouseleave", () => {
            el.style.backgroundColor = "#fff"
        })
    })
})()