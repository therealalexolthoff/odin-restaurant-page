function runEventListeners() {
    const content = document.getElementById('content')
    document.getElementById('home').addEventListener('click', () => {
        content.innerHTML = 'Home'
    })
    document.getElementById('menu').addEventListener('click', () => {
        content.innerHTML = 'Menu'
    })
    document.getElementById('contact').addEventListener('click', () => {
        content.innerHTML = 'Contact'
    })
}
export {runEventListeners};
