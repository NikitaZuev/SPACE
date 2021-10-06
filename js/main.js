$(document).ready(function(){
  var wrapperMenu = document.querySelector('.wrapper-menu');
  var wrapperMenuOpen = document.querySelector('.menu__box');

  wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
    wrapperMenuOpen.classList.toggle('open');  
  });
})
$(document).ready(function () {
  $('.service__info').mouseover(           
    function(){ //при наведении на любую ссылку указанного class'a  
         $('.service__info').removeClass('service__info_link--active'); // у всех удаляем class
         $(this).addClass('service__info_link--active') } // а этой ссылке добавляем
  );     
});
/*document.addEventListener('mousemove', function (event) {
  var div = document.querySelector(".circle");
  var bb = div.getBoundingClientRect();
  var cx = bb.left + bb.width / 2, cy = bb.top + bb.height / 2;
  var angle = Math.atan2(event.y - cy, event.x - cx);
  
  div.style.transform = "rotate(" + angle + "rad)"
});*/
$(document).ready(function(){
  var div = document.querySelector(".circle");
  $('.one').mouseenter(
    function(){
        div.style.transform = "rotate(" + -0.2 + "rad)"}
  )
  $('.two').mouseenter(
    function(){
        div.style.transform = "rotate(" + -0.7 + "rad)"}
  )
  $('.three').mouseenter(
    function(){
        div.style.transform = "rotate(" + -1.1 + "rad)"}
  )
  $('.four').mouseenter(
    function(){
        div.style.transform = "rotate(" + -1.5 + "rad)"}
  )
  $('.five').mouseenter(
    function(){
        div.style.transform = "rotate(" + -1.9 + "rad)"}
  );
});
$(document).ready(function() {
 
  $('input[type="file"]').change(function(){
      var value = $("input[type='file']").val();
      $('.js-fileName').text(value);
  });

});