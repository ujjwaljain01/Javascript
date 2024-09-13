//My approach
//function for generating color hex code 
const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    //hex codes contains 6 digits
    for(let i = 0;i < 6;i++){
        //*16 because hex can only contain 16 characters
        color += hex[Math.floor(Math.random() *16)]
    }
    return color
}

//we used flag because before when we were pressing start button twice it invoke the set inteval twice which makes BG color changer faster and messy
let interval = null
let flag = 0
const colorChanger = function(){
    document.querySelector('body').style.backgroundColor = randomColor()
}

//Event listener on start button to invoke the function set Interval 
document.querySelector('#start').addEventListener('click',function(){
    if(flag != 1){
        interval = setInterval(colorChanger,1000)
        flag = 1
    }
    else{
        alert('first stop the color changer')
    }
})

//event listener on the stop button to stop interval
document.querySelector('#stop').addEventListener('click',function(){
    flag = 0
    clearInterval(interval)
})

//sir's approach
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);