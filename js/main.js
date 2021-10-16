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
      var value = $("input[type='file']").val().split('/').pop().split('\\').pop();
      $('.js-fileName').text(value);
      if ($("input[type='file']").val() == ''){
        $('.js-fileName').text('Прикрепить файл+');
      }
  });

});

$(document).ready(function(){
  $('#output').text($('#range').val());  
	$('#range').mousemove(function() {
    if($('#range').val() == '0'){
      $('#output').text("Я не знаю");
      $('#rub').text('');
    }
    else{
      $('#output').text($('#range').val());
      $('#rub').text('Руб');
    }
	});
})
$(document).ready(function () {
  $('.header-choise-btn').click(           
    function(){ //при наведении на любую ссылку указанного class'a  
         $('.header-choise-btn').removeClass('header-choise-btn--active'); // у всех удаляем class
         $(this).addClass('header-choise-btn--active') } // а этой ссылке добавляем
  );     
});
$(document).ready(function(){
  var SectionOrder = document.querySelector('.form-order');
  var SectionOrderOpen = document.querySelector('.section-content-four');
  var SectionOrderClose = document.querySelector('.closed-menu')
  SectionOrder.addEventListener('click', function(){
    SectionOrder.classList.toggle('open');  
    SectionOrderOpen.classList.toggle('open');  
  });
  SectionOrderClose.addEventListener('click', function(){
    SectionOrder.classList.toggle('open');  
    SectionOrderOpen.classList.toggle('open');  
  });
});