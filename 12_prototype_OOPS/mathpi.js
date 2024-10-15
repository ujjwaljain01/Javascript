//we cannot modify the value of PI manually
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

console.log(Math.PI);
Math.PI = 3
console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log(`Chai nahi bani`);
    }
}

//have to pass object name with its property
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);

    }
}