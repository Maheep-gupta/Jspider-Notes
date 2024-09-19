let password = document.getElementById('password')
let username = document.getElementById('username')
function toggleShow() {
    let show = document.getElementById('toggleShow');
    if (show.type == 'password') {
        show.type = 'text'
        show.innerText = 'hide'
        password.type = 'text'
    } else {
        show.type = 'password'
        show.innerText = 'show'
        password.type = 'password'

    }

}
function formSubmit() {
    console.log(username.value);
    console.log(password.value);
    
    if (username.value === 'abcd' && password.value === '123') {
        alert("logged")
    } else {
        alert("invaild account")
    }
}