const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');    
    navMenu.classList.toggle('active');    

})

const form   = document.getElementById('forms');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    

function nameValidate(){
    if (campos[0].value.length <3 ) 
    {
        console.log()
    }
    



}


