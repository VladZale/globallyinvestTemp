
const clickMenu = (el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("active")
    })
}
multiMenu.forEach(el => {
    (isMobile() ? clickMenu(el) : mouseMenu(el))
})

const pages = [
    ["aboutpage", "AboutUs"],
    ["home", "index"],
    ["assets", "Forex", "Stocks", "Crypto", "Metals", "Indices", "Commodities", "NFT"],
    ["trading", "OurPlatform", "AccountTypes",],
    ["education", "Trading", "CFDTrading", "TechnicalAnalysis", "FundamentalAnalysis", "RiskManagement"],
    ["legal", "Disclaimer", "Privacy", "KYC"]
]

for (let i = 0; i < pages.length; i++) {
    for (let j = 0; j < pages[i].length; j++) {
        if (pathname === pages[i][j]) {
            document.getElementById(pages[i][0]).classList.toggle("active-page")
            for (let k = 0; k < pages[i].length; k++) {
                if (pathname.toLowerCase() === pages[i][k].toLowerCase() && pages[i].length > 2) {
                    pathname.toLowerCase() === 'trading'
                        ? document.getElementById(pages[i][k].toLowerCase() + 's').classList.toggle("active")
                        : document.getElementById(pages[i][k].toLowerCase()).classList.toggle("active")
                }
            }
        }
    }
}

if (pathname === '') {
    const home = document.getElementById('home')
    home.classList.toggle("active-page")
    home.addEventListener('click', scrollToTop)
    document.getElementById("faqScroll").href = "#faq"
    document.getElementById("contactsScroll").href = "#contacts"
} else {
    document.getElementById("faqScroll").href = "index.html#faq"
    document.getElementById("contactsScroll").href = "index.html#contacts"
}

if (pathname.toLowerCase() === 'accounttypes') {
@@include("Pages/accounts.js")
}


