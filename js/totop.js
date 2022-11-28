(function($) {
    "use strict";


	
	//to top script
	if ($('.to-top').length) {
		var scrollTrigger = 500, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.to-top').addClass('fixed');
				} else {
					$('.to-top').removeClass('fixed');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */