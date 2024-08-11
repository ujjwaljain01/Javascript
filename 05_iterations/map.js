//map
//can have callback fn as parameter and retuns a new array accourding to the function

//can transform the array accourding to the function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.map( (num) => num + 10 )
console.log(newNums);

// cannot alter the array just select the elements of the array accourding to the condition
const num = myNums.filter( (value) => {
    return value + 10
})
console.log(num);

//chaining
newNums = myNums
    .map( (num) => num * 10 ) 
    .map( (num) => num + 1) 
    .filter( (num) => num > 30)