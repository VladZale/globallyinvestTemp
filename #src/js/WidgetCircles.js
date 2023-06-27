// const symbols = ["BTCUSD", "ETHUSD", "XAUUSD", "SPX", "EURUSD"]
// const changeInnerText = ["BTCUSD-change","ETHUSD-change","XAUUSD-change","SPX-change","EURUSD-change"]
// const bidInnerText = ["BTСUSD-bid","ETHUSD-bid","XAUUSD-bid","SPX-bid","EURUSD-bid"]
// const headSymbols = ["BTCUSD-head","ETHUSD-head","XAUUSD-head","SPX-head","EURUSD-head"]
// const bottomSymbols = ["BTCUSD-bot","ETHUSD-bot","XAUUSD-bot","SPX-bot","EURUSD-bot"]
//
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
//                 let headSymbol = document.getElementById(headSymbols[i])
//                 let botSymbols = document.getElementById(bottomSymbols[i])
//                 symbolData[i] = data.data[symbols[i]]
//                 let resultChange =  document.getElementById(changeInnerText[i])
//                 let resultValue = document.getElementById(bidInnerText[i])
//                 changePct = symbolData[i].quote.changePct
//                 resultChange.innerText = changePct > 0 ? "+" + changePct + '%' : changePct + '%'
//                 let bidChange = document.getElementById(bidInnerText[i])
//                 bidChange.innerText = symbolData[i].quote.bid + " USD "
//                 if (symbolData[i].quote.changePct < 0 || symbolData[i].quote.bidChange < 0){
//                     resultChange.classList.add("red-gradient__value")
//                     resultValue.classList.add("red-gradient__value")
//                     headSymbol.classList.add("red-gradient")
//                     botSymbols.classList.add("red-gradient__line")
//
//                 }
//                 else{
//                     resultChange.classList.remove("red-gradient__value")
//                     resultValue.classList.remove("red-gradient__value")
//                     headSymbol.classList.remove("red-gradient")
//                     // botSymbols.classList.remove("red-gradient__line")
//                 }
//             }
//         });
// }
//
// setInterval(UppdateDate, 1000);