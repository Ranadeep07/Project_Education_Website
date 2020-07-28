burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
search = document.querySelector('.search');
navlist = document.querySelector('.nav-list');
contact = document.getElementsByClassName('contact');
navbar = document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('visibility-class-resp');
    search.classList.toggle('visibility-class-resp');

})
