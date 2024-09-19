
let increment = document.createElement('button')
increment.innerText = "+"
let decrement = document.createElement('button')
decrement.innerText = "-"
let root = document.getElementById("root")
let count = 0


root.style.display = 'flex'
root.style.justifyContent = 'center'
root.style.alignItems = 'center'
root.style.flexDirection = 'column'

let incrementDiv = document.createElement('div')
incrementDiv.append(increment, decrement)
incrementDiv.style.width = "200px"
incrementDiv.style
    .display = 'flex'
incrementDiv.style.justifyContent = 'space-between'

let counter = document.createElement('h1')
counter.innerText = count

root.append(counter, incrementDiv)




increment.addEventListener('click', () => {
    count++;
    counter.innerText = count

})
decrement.addEventListener('click', () => {
    if (count != 0) {
        count--;
        counter.innerText = count
    }

})