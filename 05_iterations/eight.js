// REDUCE METHOD :- 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((default_Balance, item) => default_Balance + item.price, 0)
// here in reduce, it has an accumulator ( here default_Balance) which is initialized by 0
// then each items are fetched from shoppingCart, which is then added with default_Balance(first iteration = 0)
// the result of "default_Balance + item.price" is stored back to priceToPay

console.log(priceToPay);