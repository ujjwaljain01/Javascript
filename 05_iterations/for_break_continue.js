//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i === 5){
        console.log(`${i} is the best number`)
    }
    console.log(element);
    
}

//TABLE
for (let i = 1; i <= 10; i++) {
     console.log(`outer loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop: ${j} outer loop: ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

let arr=['flash','batman','superman']
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

//BREAK
for (let index = 0; index <= 20; index++) {
    if(index === 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of index ${index}`);
}

//CONTINUE
for (let index = 0; index <= 20; index++) {
    if(index === 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index ${index}`);
}