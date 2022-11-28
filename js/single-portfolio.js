(function($) {
    "use strict";
  

	$(window).on("load", function() { // makes sure the whole site is loaded


		//isotope setting(portfolio gallery)
        var $container = $('.port-gallery-body');
        $container.imagesLoaded(function() {
            $container.isotope();
        });
		 // script popup image

		$('.popup-portfolio').magnificPopup({
			type: 'image',
			gallery: {
				enabobelisk: true
			}
		});


    });
	
   
	
	$(".port-gallery-body .port-img ").each(function() {
        var imG = $(this).data('background');
        $(this).css('background-image', "url('" + imG + "') "

        );
    });
	
	$(".work-img-bg").each(function() {
        var imG = $(this).data('background');
        $(this).css('background-image', "url('" + imG + "') "

        );
    });




})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */