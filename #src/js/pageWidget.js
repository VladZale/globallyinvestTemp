let symbols = {}
let time = 1000
let dataExist = true
let loadTable = false

let lot = {
    'stocks': "1,000",
    'forex': "100,000",
    'commodities':"100,000",
    'indices':"1,000",
    'crypto': "1",
    'metals': "100,000",
    'nft': "1",
}

let load = () => {
    $('#table-content').append(`
     <div class="table__content-item" id="${pathname.toLowerCase()}-item">
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load...</p>
        <p class="table__content-item-text">Load....</p>
    </div>`);
}

let uppdateDate = () => {
    if (dataExist) {
        fetch(SYMBOLS)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                symbols = data.data
                Object.filter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => Object.assign(res, {[key]: obj[key]}), {});

                symbols = Object.filter(symbols, symbol => symbol.market === `${pathname.toLowerCase()}`);
                Object.keys(symbols).length === 0 ? dataExist = false : dataExist = true
            });
    }
}

let update = () => {
    uppdateDate()

    let id = `#${pathname.toLowerCase()}-item`
    if (Object.keys(symbols).length !== 0) {
        remmoveContent(id, symbols)
    }

    updateRender()
}

let updateRender = () => {
    if (symbols.length !== 0) {
        Object.keys(symbols).forEach(key => {
            $('#table-content').append(`
             <div class="table__content-item" id="${pathname.toLowerCase()}-item">
                <p class="table__content-item-text"><img src="https://cfd.globally-invest.com/image/${symbols[key].symbol.toUpperCase()}.png" /> ${symbols[key].alias}</p>
                <p class="table__content-item-text">${symbols[key].symbol}</p>
                <p class="table__content-item-text">${lot[pathname.toLowerCase()]}</p>
                <p class="table__content-item-text">$${symbols[key].quote.bid}</p>
                <p class="table__content-item-text" id="${symbols[key].quote.changePct >= 0 ? "green" : "red"}">${symbols[key].quote.changePct > 0 ? `+${symbols[key].quote.changePct}` : symbols[key].quote.changePct}%</p>
            </div>`);
        });
    }

}

let remmoveContent = (id, symbols) => {
    Object.keys(symbols).forEach(() => {
        $(id).remove();
    });
}

let notConnected = () => {
    $("#table").remove();
}

load()
setInterval(update, time)




