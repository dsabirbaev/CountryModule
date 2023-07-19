

let modalWrap = document.querySelector('.modal-wrapper')
let home = document.querySelector('.country__home')

home.addEventListener('click', () => {
    
    modalWrap.style.cssText = "display: none";
    document.body.style.cssText = "overflow: auto"
})


export default home;