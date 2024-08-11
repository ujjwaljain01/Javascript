//for each
const coding = ["js", "C++", "java", "ruby", "python"]

//remove name when passing simple function
coding.forEach(function (value){
    console.log(value);
})

//remove name and = when passing arrow function
coding.forEach((item) =>{
    console.log(item);
})

//just pass reference when using external functions
function printMe(key){
    console.log(key);
}
coding.forEach(printMe)

//for each have info of values, their index and array formed 
coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

const lang =[
    {
        languageName:"javascript",
        extension:".js"
    },
    {
        languageName:"java",
        extension:".java"
    },
    {
        languageName:"python",
        extension:".py"
    }
]

lang.forEach((item) => {
    console.log(`${item.languageName} has extension of ${item.extension}`);
})