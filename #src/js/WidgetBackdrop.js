// const symbols = ["BTCUSD", "ETHUSD", "XAUUSD", "SPX", "EURUSD"]
// const changeInnerText = ["BTCUSD-change","ETHUSD-change","XAUUSD-change","SPX-change","EURUSD-change"]
// const bidInnerText = ["BTСUSD-bid","ETHUSD-bid","XAUUSD-bid","SPX-bid","EURUSD-bid"]
//
// let symbolData = []
// let changePct = 0
//
// function UppdateDate() {
//     fetch(SYMBOLS)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             for (let i = 0; i < symbols.length; i++) {
//                 symbolData[i] = data.data[symbols[i]]
//                 let resultChange =  document.getElementById(changeInnerText[i])
//                 changePct = symbolData[i].quote.changePct
//                 resultChange.innerText = changePct > 0 ? "+" + changePct + '%' : changePct + '%'
//                 symbolData[i].quote.changePct < 0 ? resultChange.classList.add("red") ? resultChange.classList.remove("green") : '' : resultChange.classList.add("green") ? '' : resultChange.classList.remove("red")
//                 let bidChange = document.getElementById(bidInnerText[i])
//                 bidChange.innerText = symbolData[i].quote.bid + " USD "
//             }
//         });
// }
//
// setInterval(UppdateDate, 1000);