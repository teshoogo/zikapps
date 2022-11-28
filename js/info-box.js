(function($) {
    "use strict";

    $(window).on("load", function() {

        $('.obelisk-info-box.style-10 .items').each(function () {
            $(this).on('mouseenter', function () {
                $(this).addClass("active");
                $('.obelisk-info-box.style-10 .items').not(this).removeClass("active");
            });
        });
        
    });

})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */