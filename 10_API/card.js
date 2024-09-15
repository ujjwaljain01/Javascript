//selecting input field and card field for display
const userField = document.querySelector('#username')
const card = document.querySelector('#card')

//function for getting info from API
function getinf() {
    //fetching the username
    const username = userField.value

    const url = `https://api.github.com/users/${username}`
    const req = new XMLHttpRequest()
    req.open('GET',url)
    req.onreadystatechange=function(){
        if(req.readyState === 4){
            const data = JSON.parse(this.responseText)
            displayImage(data.avatar_url)
            displaytext(data.followers)
        }
    }
    req.send()
}

let img
function displayImage (data){
    img = document.createElement('img')
    img.setAttribute('src',data)
    card.appendChild(img)
    img = null
}

function displaytext(data){
    const textElement = document.createElement('p')
    textElement.innerHTML = data
    card.appendChild(textElement)

}


document.querySelector('#submit').addEventListener('click',function getinfo(e){
    e.preventDefault()
    if(card.childNodes){
        card.innerHTML = null

    }
    getinf()
})
