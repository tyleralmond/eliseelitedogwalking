'use strict';

// $(function() {
// 	setTimeout(function() {
// 		$('.js-load-animate').addClass('is-loaded-animate');
// 	}, 250);
// });


$('.js-viewport-transition').bind('inview', function(event, isInView) {
	if (isInView) {
		$(this).addClass('inview');
	}
});


// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 100) {
//         $('.header').addClass('header-scroll');
//     } else {
//         $('.header').removeClass('header-scroll');
//     }
// });