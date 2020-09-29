$(document).ready(function(){
  $('.preloader').addClass('preloader--active');

  setTimeout(function(){
    $('.preloader').fadeOut();
  }, 2000);
});

$('.h-toggle').click(function() {
  if ($('.h-aside').hasClass('h-aside--active')) {
    $('.h-aside').removeClass('h-aside--active');
    $('.h-search').removeClass('h-search--active');
    $(this).removeClass('h-toggle--active');
  }
  else {
    $('.h-aside').addClass('h-aside--active');
    $(this).addClass('h-toggle--active');
  }
});


$('#h-submenu-search').click(function() {
  if ($('.h-aside').hasClass('h-aside--active')) {
    $('.h-aside').removeClass('h-aside--active');
    $('.h-show-menu').removeClass('h-toggle--active');
    $('.h-search').removeClass('h-search--active');
  }
  else {
    $('.h-aside').addClass('h-aside--active');
    $('.h-show-menu').addClass('h-toggle--active');
    $('.h-search').addClass('h-search--active');
  }
});

$('#h-submenu-button').click(function(){
  if ($('.betslip').hasClass('betslip--active')) {
    $('.betslip').removeClass('betslip--active');
    $(this).removeClass('h-submenu__button--active');
  }
  else {
    $('.betslip').addClass('betslip--active');
    $(this).addClass('h-submenu__button--active');
  }
});

$('.h-account').click(function(){
  if ($('.cb-aside').hasClass('cb-aside--active')) {
    $('.cb-aside').removeClass('cb-aside--active');
  }
  else {
    $('.cb-aside').addClass('cb-aside--active');
    $(this).addClass('cb-aside--active');
  }
});
