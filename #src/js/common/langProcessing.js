@@include('langs.js')

let changeTextInfo = () => {
    let companyText = document.querySelectorAll("[data-textInfo]")
    if (companyText.length !== 0) {
        let reLink = /%%(\w+_LINK)%%/g
        let reName = /%%(\w+_NAME)%%/g
        companyText.forEach(el => {
            el.innerText = el.innerText.replace(reLink, COMPANY_LINK)
            el.innerText = el.innerText.replace(reName, COMPANY)
        })
    }
}

let langsRender = (langs) => {
    if (langs.length !== 0 && MULTI_LANG) {
        Object.keys(langs).forEach(key => {
            $('#langs').append(`
               <li class="menu__submenu langs__item" data-lang>
                   ${langs[key]._name.toUpperCase()}
               </li>
        `);
        });
    }
    languages = document.querySelectorAll('[data-lang]')
}

let makeActiveLang = lang => {
    activeLang = lang
    if (lang.innerText !== undefined) {
        activeLang = lang.innerText.toLowerCase()
    }

    let landFields = createActiveLangArray(langs[activeLang])

    for (let i = 0; i < landFields.length; i++) {
        Object.keys(langs[activeLang][landFields[i]]).forEach(el => {
            document.querySelectorAll(`[data-${landFields[i]}-${el}`).forEach(lang => {
                lang.innerText = langs[activeLang][`${landFields[i]}`][el]
            })
        })
    }

    getLangText()

    localStorage.setItem('languages', activeLang)
    changeTextInfo()
}

let createActiveLangArray = activeLang => {
    let arrayLang = []
    let i = 0

    Object.keys(activeLang).forEach(key => {
        if (key !== "_name") {
            arrayLang[i] = key
            ++i
        }
    })

    return arrayLang
}

let activeLang
let languages

localStorage.getItem('languages') === null ? activeLang = 'en' : activeLang = localStorage.getItem('languages')
let getLangText = () => {
    if (MULTI_LANG){
        document.getElementById('active-lang').innerText = activeLang.toUpperCase()
    }
}

getLangText()

langsRender(langs)

languages.forEach(el => {
    el.addEventListener("click", () => {
        makeActiveLang(el)
        removeActive()
        el.classList.add('active')
    })
})

if (!MULTI_LANG){
    document.getElementById('language').remove()
}

let removeActive = () => {
    languages.forEach(el => {
        el.classList.remove('active')
    })
}

makeActiveLang(activeLang);