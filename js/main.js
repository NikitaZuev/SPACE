$(document).ready(function(){
  var wrapperMenu = document.querySelector('.menu');
  var wrapperMenuOpen = document.querySelector('.menu__box');

  wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
    wrapperMenuOpen.classList.toggle('open');  
  });
  
})