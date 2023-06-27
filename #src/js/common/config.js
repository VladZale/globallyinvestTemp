// CONFIG

// SCRIPTS
let appendDataText = (company, text) => {
    company.forEach(el => {
        el.append(text)
    })
}

let appendDataLink = (company, link) => {
    company.forEach(el => {
        el.href = link
    })
}

// accounts
const accounts = document.querySelectorAll("[data-account-price]")
const sign = document.querySelectorAll("[data-sign]")
if (accounts.length !== 0) {
    sign.forEach(el => {
        el.append(ACCOUNT_SIGN)
    })

    accounts.forEach(el => {
        let index = $(el).data("account-price")
        let minPrice = el.querySelector("[data-min-price]")
        let maxPrice = el.querySelector("[data-max-price]")

        $(minPrice).append(COMPANY_PRICE[index][0])
        $(maxPrice).append(COMPANY_PRICE[index][1])
    })
}

// companyName
const companyName = document.querySelectorAll("[data-company-name]")
if (companyName) {
    appendDataText(companyName, COMPANY)
}
// companyLink
const companyLink = document.querySelectorAll("[data-company-link]")
if (companyLink) {
    appendDataText(companyLink, COMPANY_LINK)
}
// companyLogin
const companyLogin = document.querySelectorAll("[data-company-login]")
if (companyLogin) {
    appendDataLink(companyLogin, COMPANY_LOGIN)
}
// companyRegister
const companyRegister = document.querySelectorAll("[data-company-register]")
if (companyRegister) {
    appendDataLink(companyRegister, COMPANY_REGISTER)
}


changeTextInfo()

