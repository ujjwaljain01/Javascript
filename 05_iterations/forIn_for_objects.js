//FOR IN
//TO iterate through objects we use for in loop
const myObject= {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const languages = ["JS","C","C++","java","php"]

//we canuse it in arrays to but not like for of
for (const key in languages) {
    console.log(languages[key]);
}

//Map is not an iteratable object
const map = new Map()
map.set('In','India')
map.set('USA','United States Of America')
map.set('Fr','France')

for(const key in map){
    console.log(map[key]);
}