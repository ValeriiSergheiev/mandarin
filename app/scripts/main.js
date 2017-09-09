$(document).ready(function() {

//Slider


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