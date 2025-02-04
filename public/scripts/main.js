const menu  =  document.getElementById("menu")
const btnToggle = document.getElementById("btn")
btnToggle.addEventListener('click' , ()=>{
    menu.classList.toggle('hidden')
})