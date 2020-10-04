$(document).ready(function(){
  // $('.preloader').addClass('preloader--active');
  //
  // setTimeout(function(){
  //   $('.preloader').fadeOut();
  // }, 2000);
});


$('.toggle').click(function(){

  if ($(this).hasClass('toggle--active')) {
    $(this).removeClass('toggle--active');

    $('.aside').removeClass('aside--active');
  }
  else {
    $(this).addClass('toggle--active');

    $('.aside').addClass('aside--active');
  }
});
