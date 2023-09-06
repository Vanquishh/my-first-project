let total_price = document.querySelector('.totalprice')
let prices = document.querySelectorAll('.price:not(.totalprice)')
let temp = 0

for(let i = 0; i < prices.length; i++){
    temp = temp + Number(prices[i].textContent)
}
total_price.textContent = temp