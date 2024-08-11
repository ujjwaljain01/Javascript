//reduce
//reduce an array to a single value and returns that value
const myNums = [1, 2, 3]

let myTotal = myNums.reduce( function (acc,currvalue) {
    console.log(`acc : ${acc} & currentValue : ${currvalue}`);
    return acc + currvalue
}, 0)
console.log(myTotal);

myTotal = myNums.reduce( (acc,currvalue) => acc+currvalue ,0)
console.log(myTotal);

const ShoppingCart = [
    {
        courseName:"JS course",
        price: 2999
    },
    {
        courseName:"Python course",
        price: 999
    },
    {
        courseName:"Mobile dev course",
        price: 5999
    },
    {
        courseName:"data scientist course",
        price: 12999
    },
]

const cartTotal = ShoppingCart.reduce( (acc,item) => acc + item.price, 0) 

console.log(cartTotal);