$(document).ready(function() {

//Slider
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	parallax: true,
	speed: 600,
	loop: true
            //autoplay: 1000
          });

//Mobile menu
$('.btn-mobile button').click(function() {
	$(this).toggleClass('is-active');
	$('.menu-mob').slideToggle(400);
});

$(window).resize(function() {
	$('.menu-mob').fadeOut(400);
	$('.btn-mobile button').removeClass('is-active');
});

$('.menu-mob a').click(function() {
	$('.menu-mob').fadeOut(400);
	$('.btn-mobile button').removeClass('is-active');
});


});