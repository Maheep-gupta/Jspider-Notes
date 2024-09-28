localStorage.setItem('theme', 'light')
const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.style.backgroundColor = '#212121'
        localStorage.setItem('theme', 'dark')

    }
    else {

        document.body.style.backgroundColor = '#fff'
        localStorage.setItem('theme', 'light')
    }
}

