//Selecting form from the document
const form = document.querySelector("form")

//Attaching an event listener to it
form.addEventListener('submit',function (e){
    //prevents normal GET/POST data sending of the form
    e.preventDefault()
    
    //slecting height and weight and converting then to integer as the values always comes as a string
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    //chacking the edge cases
    if(height === "" || isNaN(height) || height < 0){
        results.innerHTML = `Invalid height`
    }
    else if(weight === "" || isNaN(weight) || weight < 0){
        results.innerHTML = `Invalid weight`
    }
    else{
        //calcuting BMI 
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //display the result on the webpage category wise
        if(bmi < 18.6){
            results.innerHTML = `Under weight ${bmi}`
        }
        else if(bmi >= 18.6 && bmi <= 24.9 ){
            results.innerHTML = `Normal weight ${bmi}`
        }
        else{
            results.innerHTML = `Overweight ${bmi}`
        }
    }
})