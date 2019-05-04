// Intro - OwlCarousel

let introCarousel 		= $('.intro__slider');
let introCarouselNext 	= $('.intro__slider-nav-btn--next');
let introCarouselPrev 	= $('.intro__slider-nav-btn--prev');

introCarousel.owlCarousel({
	items: 	1,
	loop: 	true,
	dots: 	false,
	nav: 	false,
});

introCarouselNext.click(function() {
	$('.owl-next').trigger('click');
});

introCarouselPrev.click(function() {
	$('.owl-prev').trigger('click');
});

introCarousel.children('.owl-stage-outer').after($('.intro__slider-nav'));



// Testimonals - OwlCarousel

let testimonalsCarousel = $('.testimonials__slider');

testimonalsCarousel.owlCarousel({
	items: 	1,
	loop: 	true,
	dots: 	true,
	nav: 	false,
});

testimonalsCarousel.children('.owl-dots').addClass('testimonials__slider-dots')

// OWL - Fix
$('.owl-stage-outer').css('overflow', 'hidden');
$('.owl-stage').css('display', 'flex');
$('.disabled').css('display', 'none');

// Mobile Navigation

navHeader 		= $('.header__nav');
btnNavHeader 	= $('.header__nav-btn');

btnNavHeader.click(function() {
	navHeader.toggleClass('header__nav--active')
});