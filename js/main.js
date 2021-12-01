var swiper = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$(document).ready(function(){
  var wrapperMenu = document.querySelector('.wrapper-menu');
  var wrapperMenuOpen = document.querySelector('.menu__box');

  wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
    wrapperMenuOpen.classList.toggle('open');  
  });
});
$(document).ready(function () {
  var words = document.getElementsByClassName('word');
  var wordArray = [];
  var currentWord = 0;
  words[currentWord].style.opacity = 1;

  for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
  }
  function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
          animateLetterOut(cw, i);
      }
      for (var i = 0; i < nw.length; i++) {
          nw[i].className = 'letter behind';
          nw[0].parentElement.style.opacity = 1;
          animateLetterIn(nw, i);
      }
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }
  function animateLetterOut(cw, i) {
      setTimeout(function() {
          cw[i].className = 'letter out';
      }, i*80);
  }
  function animateLetterIn(nw, i) {
      setTimeout(function() {
          nw[i].className = 'letter in';
      }, 1140+(i*80));
  }
  function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
          var letter = document.createElement('span');
          letter.className = 'letter';
          letter.innerHTML = content.charAt(i);
          word.appendChild(letter);
          letters.push(letter);
      }
      wordArray.push(letters);
  }
  changeWord();
  
  setInterval(changeWord, 5000);
  
});
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
    $('#form-six').change(function(){
      var value = $("#form-six").val().split('/').pop().split('\\').pop();
      $('.js-fileName-six').text(value);
      if ($("#form-six").val() == ''){
        $('.js-fileName-six').text('Загрузить файл (если нужно)');
      }
  });
});


$(document).ready(function(){
  var ballone = document.querySelector(".ball-one");
  var balltwo = document.querySelector(".ball-two");
  var ballthree = document.querySelector(".ball-three");
  var range = document.getElementById('range');
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
    if($('#range').val() == '0'){
      ballone.style.visibility = "hidden"
    }
    else{
      ballone.style.visibility = "visible"
    }
    if($('#range').val() == '100000'){
      balltwo.style.visibility = "hidden"
    }
    else{
      balltwo.style.visibility = "visible"
    }
    if($('#range').val() == '200000'){
      ballthree.style.visibility = "hidden"
    }
    else{
      ballthree.style.visibility = "visible"
    }
	});
  range.addEventListener('touchmove', function(event){
    if($('#range').val() == '0'){
      $('#output').text("Я не знаю");
      $('#rub').text('');
    }
    else{
      $('#output').text($('#range').val());
      $('#rub').text('Руб');
    }
    if($('#range').val() == '0'){
      ballone.style.visibility = "hidden"
    }
    else{
      ballone.style.visibility = "visible"
    }
    if($('#range').val() == '100000'){
      balltwo.style.visibility = "hidden"
    }
    else{
      balltwo.style.visibility = "visible"
    }
    if($('#range').val() == '200000'){
      ballthree.style.visibility = "hidden"
    }
    else{
      ballthree.style.visibility = "visible"
    }
  });
});
$(document).ready(function () {
  $('.header-choise-btn').click(           
    function(){ //при наведении на любую ссылку указанного class'a  
         $('.header-choise-btn').removeClass('header-choise-btn--active'); // у всех удаляем class
         $(this).addClass('header-choise-btn--active') } // а этой ссылке добавляем
  );     
});
$(document).ready(function () {
  var planet = document.querySelector(".reviews-planet");
  if ($(window).width() < 1200 || $(window).height() < 660){
    $('.fullpage').removeAttr('data-fs-scroll');
    planet.style.display = "none"
  }
});
