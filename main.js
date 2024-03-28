const dropLinks = document.querySelectorAll('.drop')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

dropLinks.forEach(link => {
    link.onclick = () => {
        const data = link.dataset.drop
        link.classList.toggle('drop-active')
        const dropMenu = document.querySelector(`.drop-menu-${data}`)
        if(dropMenu.classList.contains('drop-menu-active')){
            dropMenu.classList.remove('drop-menu-active')
        }else{
            dropMenu.classList.add('drop-menu-active')
        }
    }
})

hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('nav-active')
}