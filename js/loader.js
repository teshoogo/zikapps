(function($) {
	"use strict";
	$(window).on("load", function() { // makes sure the whole site is loaded
		//preloader
		$(".pre-loading").fadeOut(); // will first fade out the loading animation
		$(".pre-loading").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website. 
		$(".svg-pre-loading").fadeOut(); // will first fade out the loading animation
		$(".svg-pre-loading").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website. 
		
	});
})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */