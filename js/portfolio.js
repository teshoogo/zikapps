(function ($) {
	"use strict";


	$(window).on("load", function () { // makes sure the whole site is loaded 

		$('.obelisk-portfolio .gallery').isotope({
			// options
			itemSelector: '.items'
		});

		var $gallery = $('.obelisk-portfolio .gallery , .obelisk-portfolio .gallery-mons').isotope();

		$('.obelisk-portfolio .filtering span').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			$gallery.isotope({ filter: filterValue });
		});

		$('.obelisk-portfolio .filtering span').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});

		//isotope setting(portfolio)
		$('.portfolio-body').imagesLoaded(function () { $('.portfolio-body').isotope() });

		// filter items when filter link is clicked
		$('.port-filter a').on('click', function () {
			var selector = $(this).attr('data-filter');
			$('.portfolio-body').isotope({
				itemSelector: '.port-item',
				filter: selector,
			});
			$(".port-filter a").removeClass("active");
			$(this).addClass("active");
			return false;
		});


		//Swiper (portfolio)
		var swiperWorkMetro = new Swiper('.portfolio.style-4 .swiper-container', {
			slidesPerView: 2,
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			centeredSlides: true,

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 0
				}
			},

			pagination: {
				el: '.portfolio.style-4 .swiper-pagination',
				type: 'progressbar',
			},

			navigation: {
				nextEl: '.portfolio.style-4 .swiper-button-next',
				prevEl: '.portfolio.style-4 .swiper-button-prev'
			},
		});



	});



})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */