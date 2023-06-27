let symbols = {}
let time = 1000
let dataExist = true
let loadTable = false

$('#active-link')[0].text = pathname

let renderTable = () => {
    if (dataExist) {
        if (!loadTable) {
            $('#table').append(`
        <div class="table__inner">
            <div class="table__head">
                <div class="table__head-content">
                    <h3 class="table__head-item">
                        Name
                    </h3>
                    <h3 class="table__head-item">
                        Symbol
                    </h3>
                    <h3 class="table__head-item">
                        Order
                    </h3>
                    <h3 class="table__head-item">
                        Lot Size
                    </h3>
                    <h3 class="table__head-item">
                        Price
                    </h3>
                    <h3 class="table__head-item">
                        Change
                    </h3>
                </div>
            </div>
            <div class="table__content" id="table-content">
            
            </div>
        </div>`);
            load()
        }
        loadTable = true
        setInterval(update, time)
    }
}

let load = () => {
    $('#table-content').append(`
     <div class="table__content-item" id="${pathname.toLowerCase()}-item">
        <p class="table__content-item-text">Load...</p>
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
                <p class="table__content-item-text">${symbols[key].alias}</p>
                <p class="table__content-item-text">${symbols[key].symbol}</p>
                <p class="table__content-item-text">${symbols[key].order}</p>
                <p class="table__content-item-text">-</p>
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

setInterval(renderTable, time)




