//PROMISE
/*Promises areused to perform async task in javascript. We can create promises with 
new keyword and it takes a callback fn that has two parameters resolve reject */

//Do anytask here 
//DB calls
//API fetch
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async completed');
        resolve()
    },1000)
})

//.THEN
//if promise is resolved the .then block is executed
promiseOne.then(function(){
    console.log(`Promise consumed`);
})

//we can create promises without using variables
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Promise`);
        resolve()
    },1000)
}).then(function(){
    console.log('hello');
})

//Passing value in then through object
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //jadatar objects pass karte h isme
        resolve({name:"Ujjwal" , email:"you@example.com"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})

//chaining then(thenable) and finally block
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'ujjwal'})
        }
        else{
            reject('ERROR : something went wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    return user.username
})
//next 'then' gets return value of pre 'then' as parameter
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log(`finally executed`);
})

//using async await for handling promises
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : 'JAVASCRIPT'})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

//
async function consumePromiseFive() {
    //cannot handle errors correctly
    //const response = await promiseFive
    
    //so we have to use try and catch block
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers() {
    try{
        const response = await fetch(`https://api.github.com/users`)
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

// getAllUsers()

fetch(`https://api.github.com/users`)
.then(function(response){
    console.log(response.json())
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})