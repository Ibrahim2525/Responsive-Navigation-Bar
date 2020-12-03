let myBurger = document.querySelector('.burger');
let myList = document.querySelector('.nav-links');
myBurger.addEventListener('click', ()=>{
        myList.classList.toggle('nav-active');
});

