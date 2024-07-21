//array
//declaration of array
const array=[1,2,"Hello",true]
const myArray= new Array("hello","world",2,3)

//accessing array
console.log(array[0]);

//Methods
let arr=[1,2,3,4]
//insertion at end
arr.push(0)
console.log(arr);

//deletion at end
arr.pop()
console.log(arr);

//insertion at front
arr.unshift(5) 
console.log(arr);

//deletion at front
arr.shift()
console.log(arr);

//return boolean search in array can give element and index for search
console.log(arr.includes(2,1));

//return index if found the element and if not returns -1
console.log(arr.indexOf(8));

//adds elements of arr in form of a single string
let newarr=arr.join()
console.log(newarr);

//slice doesnot manipulate the OG array but splice cuts the original array also
arr=[1,2,3,4]
console.log('A',arr);//[1,2,3,4]
console.log(arr.slice(0,3));
console.log('B',arr);//[1,2,3,4]
console.log(arr.splice(0,3));
console.log('C',arr);//[4]
