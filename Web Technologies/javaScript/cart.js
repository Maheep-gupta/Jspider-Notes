let cart = [
    {
        productId: 101,
        productName: "Box",
        productPrice: 122.34,
        productQty: 3,
    },
    {
        productId: 102,
        productName: "Pencil",
        productPrice: 10,
        productQty: 3,
    },
    {
        productId: 103,
        productName: "T-shirt",
        productPrice: 122.34,
        productQty: 3,
    },
    {
        productId: 104,
        productName: "Copy",
        productPrice: 10,
        productQty: 3,
    },
    {
        productId: 105,
        productName: "Pen",
        productPrice: 12,
        productQty: 3,
    },

]
// let arr=cart.map((ele) => {
//     return ele.productPrice > 10;
//     console.log(ele.productPrice>10);

// })
// cart.filter((ele) => {
//     console.log(ele);
// })

let filteredArray = cart.filter((ele) => {
    return ele.productPrice > 10;
})

cart.map((ele) =>
    console.log(ele)

)
let reducedValue = cart.reduce((init, ele) =>
    init = init + ele.productPrice, 0
)
console.log(reducedValue);
