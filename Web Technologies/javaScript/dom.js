let a = document.createElement('h1')
let body = document.querySelector('body')
let root = document.getElementById("root")

root.style.textAlign="center"



a.innerText="Dom Sheekhega kya be"
a.style.backgroundColor="pink"
a.style.color="violet"



let image=document.createElement('img')
image.src = "../Code/images/image.webp"
image.height = '300'


let button = document.createElement("button")
button.innerText="Change Theme"
button.addEventListener('click', () => {
    if (body.style.backgroundColor!='black') {
        body.style.backgroundColor='black'
        body.style.color='white'
    }
    else {
        body.style.backgroundColor='white'
        body.style.color='black'
    }
})

root.appendChild(a)


root.appendChild(image)
root.appendChild(button)