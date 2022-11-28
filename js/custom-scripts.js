
!(function ($) {


    /* Parallax (Image-4) */ 
    function obeliskimage($scope) { 
        var $target = $scope.find( '.obelisk-image.prlx' );
        if ( $target.length > 0 ) {
            if ( $( '[data-parallax-layout-ratio]' ).length > 0 ) {
                $( '[data-parallax-layout-ratio]' ).each( function() {
                    var ratio = $( this ).attr( 'data-parallax-layout-ratio' ) || 1;
                    $( this ).parallaxImg( ratio );
                });
            }
        }
    }

    function screenshots1($scope) {
        var swiperScreenApp = new Swiper('.obelisk-screenshots.style-1 .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 1000,
            loop: true,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                640: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                991: {
                    slidesPerView: 5,
                }
            },

            pagination: {
                el: '.obelisk-screenshots.style-1 .swiper-pagination',
                clickable: true,
            },

        });
    };

    function postlistimage8($scope) {
        var swiperBlogImg = new Swiper('.obelisk-post-list.style-8 .swiper-img', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,
            effect: 'fade',

            pagination: {
                el: '.obelisk-post-list.style-8 .controls .swiper-pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.obelisk-post-list.style-8 .controls .next-ctrl',
                prevEl: '.obelisk-post-list.style-8 .controls .prev-ctrl'
            },
        });
    };

    function postlistcontent8($scope) {
        var swiperBlogContent = new Swiper('.obelisk-post-list.style-8 .swiper-content', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,

            pagination: {
                el: '.obelisk-post-list.style-8 .controls .swiper-pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.obelisk-post-list.style-8 .controls .next-ctrl',
                prevEl: '.obelisk-post-list.style-8 .controls .prev-ctrl'
            },
        });
    }

    /* Testimonial-2 */ 
    function obelisktestim2($scope, $) { 
        $scope.find('.obelisk-testim-2').each(function () {
            var myTarget    = $( this );
            var myData      = myTarget.data('testim-settings' ); 
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var obelisktestim_2;
            var obelisktestim_2_Options = {
                speed       : myspeed,
                autoplay    : myautoplay,
                loop        : myloop,
                pagination: {
                  el: ".obelisk-testim-2 .swiper-pagination",
                  clickable: true,
                  type: 'bullets',
                },
            };
            obelisktestim_2 = new Swiper( '.obelisk-testim2', obelisktestim_2_Options );
        });
    }

    /* Testimonial-4 */ 
    function obelisktestim4($scope, $) { 
        $scope.find('.obelisk-testimonial.style-4').each(function () {
            var myTarget    = $( this );
            var delay      = myTarget.data('testim-delay' );
            var obelisktestim4 = new Swiper('.obelisk-testimonial.style-4 .swiper-container', {
                spaceBetween: 0,
                slidesToScroll: 1,
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: '.obelisk-testimonial.style-4 .prev',
                    prevEl: '.obelisk-testimonial.style-4 .next',
                },
                dots: false,
                autoplay: {
                    delay: delay,
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }
                },
            });
        });
    };

    /* Testimonial-5 */ 
    function obelisktestim5($scope, $) { 
        var obelisktestim5 = new Swiper('.obelisk-testimonial.style-5 .swiper-container', {
            spaceBetween: 0,
            slidesToScroll: 1,
            loop: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.obelisk-testimonial.style-5 .prev',
                prevEl: '.obelisk-testimonial.style-5 .next',
            },
            dots: false,
            autoplay: true,
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 0
                }
            },
        });
    };

    /* Testimonial-5 */ 
    function obelisktestim6($scope, $) { 
        var obelisktestim6 = new Swiper('.obelisk-testimonial.style-6 .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1000,
            loop: true,

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
                    centeredSlides: false,
                },
                991: {
                    slidesPerView: 3,
                }
            },

            pagination: {
                el: '.obelisk-testimonial.style-6 .swiper-pagination',
                clickable: true,
            },

        });
    };

    /* Post list-5 */ 
    function obeliskpostlist5($scope, $) { 
        $scope.find('.tcg-post-list.style-5').each(function () {
            var myTarget    = $( this );
            var mySlider   = myTarget.find( '.postlist-slider' );
            var myData      = myTarget.data('postlist-settings' ); 

            var myspeed     = myData.speed;
            var mytoview     = myData.slidesPerView;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var tcgpostlist5;
            var tcgpostlist5Options = {
                speed       : myspeed,
                autoplay    : myautoplay,
                loop        : myloop,
                spaceBetween: 30,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  type: 'bullets',
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: mytoview,
                        spaceBetween: 30
                    }
                },
            };
            tcgpostlist5 = new Swiper( '.postlist-slider', tcgpostlist5Options );
        });
    }

    /* ===============================  Slider-0  =============================== */ 
         
    function obeliskSlider0($scope, $) {  

        /* --------------------  Swipper slide  --------------- */
        $scope.find('.obelisk-slider.style-0').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var myparallax  = myData.parallax;

            var obeliskslider0;
            var obelisk_slider0_Options = {
                speed       : myspeed,
                autoplay    : myautoplay,
                loop        : myloop,
                parallax    : myparallax,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  type: 'fraction',
                },
                on: {
                    init: function () {
                        let swiper = this;
                        for ( let i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({'data-swiper-parallax': 0.75 * swiper.width});
                           // $( swiper.slides[i] ).find( '.main-title' ).attr({'data-swiper-parallax': 0.65 * swiper.width});
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                } 

            };
            obeliskslider0 = new Swiper( '.obelisk-slider0', obelisk_slider0_Options );            
        });


        /* --------------------  fade slideshow  --------------- */ 

        $(window).scroll(function () {
            var scrolled = $(this).scrollTop();
            $('.obelisk-slider.style-0.scroly .caption').css({
                'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
                'opacity': 1 - scrolled / 600
            });

        });
    }

    /* Slider-1 */  
    function obeliskSlider1($scope, $) {  
        $scope.find('.obelisk-slider.style-1').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var myparallax  = myData.parallax;

            var obeliskslider1;
            var obelisk_slider1_Options = {
                speed       : myspeed,
                autoplay    : myautoplay,
                loop        : myloop,
                parallax    : myparallax,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  type: 'bullets',
                },
                on: {
                    init: function () {
                        let swiper = this;
                        for ( let i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({'data-swiper-parallax': 0.75 * swiper.width});
                           // $( swiper.slides[i] ).find( '.main-title' ).attr({'data-swiper-parallax': 0.65 * swiper.width});
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.next-ctrl',
                    prevEl: '.prev-ctrl'
                }

            };
            obeliskslider1 = new Swiper( '.obelisk-slider1', obelisk_slider1_Options );
        });
    }


    /* ===============================  Slider-2  =============================== */ 
         
    function obeliskSlider2($scope, $) {  

        /* --------------------  Swipper slide  --------------- */
        $scope.find('.obelisk-slider.style-2').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var myparallax  = myData.parallax;

            var obeliskslider2;
            var obelisk_slider2_Options = {
                speed       : myspeed,
                autoplay    : myautoplay,
                loop        : myloop,
                parallax    : myparallax,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  type: 'bullets',
                },
                on: {
                    init: function () {
                        let swiper = this;
                        for ( let i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({'data-swiper-parallax': 0.75 * swiper.width});
                           // $( swiper.slides[i] ).find( '.main-title' ).attr({'data-swiper-parallax': 0.65 * swiper.width});
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                } 

            };
            obeliskslider2 = new Swiper( '.obelisk-slider2', obelisk_slider2_Options );            
        });


        /* --------------------  fade slideshow  --------------- */ 

        $(window).scroll(function () {
            var scrolled = $(this).scrollTop();
            $('.obelisk-slider.style-2.scroly .caption').css({
                'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
                'opacity': 1 - scrolled / 600
            });

        });
    }



    /* ===============================  Slider-6  =============================== */   
    function obeliskSlider6($scope, $) {
        $scope.find('.obelisk-slider.style-6').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed       : myspeed,
                autoplay    : myautoplay,
                parallax    : myparallax,
                loop        : myloop,
                pagination  : {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var swiper = this;
                        for ( var i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({ 'data-swiper-parallax': "-23%" });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.slider .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper( '.slider-prlx .parallax-slider', parallaxSliderOptions );
        });
    }
    /* Slider-7 */ 
    function obeliskSlider7($scope, $) {
        $scope.find('.obelisk-slider.style-7').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed       : myspeed,
                autoplay    : myautoplay,
                parallax    : myparallax,
                loop        : myloop,
                pagination  : {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var swiper = this;
                        for ( var i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.slider .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper( '.slider-prlx .parallax-slider', parallaxSliderOptions );
        });
    }

    /* Slider-8 */ 
    function obeliskSlider8($scope, $) {
        $scope.find('.obelisk-slider.style-8').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var swiperBusImgOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 0,
                effect: 'fade',
                autoplay    : myautoplay,
                navigation: {
                    nextEl: '.slider-bus .next-ctrl',
                    prevEl: '.slider-bus .prev-ctrl'
                }
            };
            var swiperBusContentOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay    : myautoplay,
                pagination: {
                    el: '.slider-bus .swiper-pagination',
                    type: 'fraction',
                },
            };
            swiperBusImg = new Swiper( '.slider-bus .swiper-img', swiperBusImgOptions);
            swiperBusContent = new Swiper( '.slider-bus .swiper-content', swiperBusContentOptions);
        });
    }

    /* Slider-9 */ 
    function obeliskSlider9($scope, $) {
        $scope.find('.obelisk-slider.style-9').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var swiperBusImgOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 0,
                effect: 'fade',
                autoplay    : myautoplay,
                navigation: {
                    nextEl: '.slider-bus .next-ctrl',
                    prevEl: '.slider-bus .prev-ctrl'
                }
            };
            var swiperBusContentOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay    : myautoplay,
                pagination: {
                    el: '.slider-bus .swiper-pagination',
                    type: 'fraction',
                },
            };
            swiperBusImg = new Swiper( '.slider-bus .swiper-img', swiperBusImgOptions);
            swiperBusContent = new Swiper( '.slider-bus .swiper-content', swiperBusContentOptions);
        });
    }

    /* Slider-10 */ 
    function obeliskSlider10($scope, $) {  
        $scope.find('.obelisk-slider-10').each(function () {

            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed: myspeed,
                autoplay: myautoplay,
                parallax: myparallax,
                loop: myloop,

                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update(); 
                    }
                },

                pagination: {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    dynamicBullets: true,
                    clickable: true
                },

                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
        });
    }

    /* Slider-11 */ 
    function obeliskSlider11($scope, $) {  
        $scope.find('.obelisk-slider.style-11').each(function () {

            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed: myspeed,
                autoplay: myautoplay,
                parallax: myparallax,
                loop: myloop,

                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update(); 
                    }
                },

                pagination: {
                    el: '.obelisk-slider.style-11 .parallax-slider .swiper-pagination',
                    clickable: true
                },

                navigation: {
                    nextEl: '.obelisk-slider.style-11 .parallax-slider .next-ctrl',
                    prevEl: '.obelisk-slider.style-11 .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper('.obelisk-slider.style-11 .parallax-slider', parallaxSliderOptions);
        });
    }

    /* Portfolio-6 */ 
    function obeliskPortfolio6($scope, $) {
        $scope.find('.portfolio.style-6').each(function () {
            var mySlider    = $( this );
            var swiperPortfolioOptions = {
                speed       : 1000,
                loop        : true,
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0 
                    }
                },
                pagination: {
                    el: '.caroul .swiper-pagination',
                    type: 'progressbar',
                },

                navigation: {
                    nextEl: '.caroul .swiper-button-next',
                    prevEl: '.caroul .swiper-button-prev'
                },
            };
            swiperBusImg = new Swiper( '.caroul .swiper-container', swiperPortfolioOptions);
        });
    }

    /* Portfolio-10 */ 
    function obeliskPortfolio10($scope, $) {
        var portfolioswiper10 = new Swiper('.obelisk-portfolio.style-10 .swiper-container', {
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
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false,
                },
                991: {
                    slidesPerView: 2,
                }
            },
    
            pagination: {
                el: '.obelisk-portfolio.style-10 .swiper-pagination',
                type: 'progressbar',
            },
    
            navigation: {
                nextEl: '.obelisk-portfolio.style-10 .swiper-button-next',
                prevEl: '.obelisk-portfolio.style-10 .swiper-button-prev'
            },
        });
    }

    /* Portfolio-11 */ 
    function obeliskPortfolio11($scope, $) {
        var portfolioswiper11 = new Swiper('.obelisk-portfolio.style-11 .swiper-container', {
            spaceBetween: 0,
            speed: 1000,
            loop: true,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },

            pagination: {
                el: '.obelisk-portfolio.style-11 .swiper-pagination',
                type: 'progressbar',
            },

            navigation: {
                nextEl: '.obelisk-portfolio.style-11 .swiper-button-next',
                prevEl: '.obelisk-portfolio.style-11 .swiper-button-prev'
            },
        });
    }

   /* Showcase-1 */ 
    function obeliskShowcase1($scope, $) {
        $scope.find('.showcase.style-1').each(function () {
            var parallaxShowCase; 
            var parallaxShowCaseOptions = {
                speed: 1000,
                autoplay: true,
                parallax: true,
                mousewheel: true,
                loop: true,
                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.showcase-full .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },

                navigation: {
                    nextEl: '.showcase-full .parallax-slider .next-ctrl',
                    prevEl: '.showcase-full .parallax-slider .prev-ctrl'
                },
            };
            parallaxShowCase= new Swiper( '.showcase-full .parallax-slider', parallaxShowCaseOptions);
        });
    }

    /* Showcase-5 */ 
    function obeliskShowcase5($scope, $) {
        $scope.find('.obelisk-showcase.style-5').each(function () {
            var containe = $(this).find('[data-swiper="container"]').attr('id');
            var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
            var prev = $(this).find('[data-swiper="prev"]').attr('id');
            var next = $(this).find('[data-swiper="next"]').attr('id');
            var items = $(this).data('items');
            var autoplay = $(this).data('autoplay');
            var iSlide = $(this).data('initial');
            var loop = $(this).data('loop');
            var parallax = $(this).data('parallax');
            var space = $(this).data('space');
            var speed = $(this).data('speed');
            var center = $(this).data('center');
            var effect = $(this).data('effect');
            var direction = $(this).data('direction');
            var mousewheel = $(this).data('mousewheel');

            // Configuration
            var conf = {
                navigation: {
                    nextEl: '.obelisk-showcase.style-5 .swiper-button-next',
                    prevEl: '.obelisk-showcase.style-5 .swiper-button-prev'
                }
            };

            if (items) {
                conf.slidesPerView = items
            };
            if (autoplay) {
                conf.autoplay = autoplay
            };
            if (iSlide) {
                conf.initialSlide = iSlide
            };
            if (center) {
                conf.centeredSlides = center
            };
            if (loop) {
                conf.loop = loop
            };
            if (parallax) {
                conf.parallax = parallax
            };
            if (space) {
                conf.spaceBetween = space
            };
            if (speed) {
                conf.speed = speed
            };
            if (mousewheel) {
                conf.mousewheel = mousewheel
            };
            if (effect) {
                conf.effect = effect
            };
            if (direction) {
                conf.direction = direction
            };
            if (prev) {
                conf.prevButton = '#' + prev
            };
            if (next) {
                conf.nextButton = '#' + next
            };
            if (pagination) {
                conf.pagination = '#' + pagination,
                    conf.paginationClickable = true
            };

            // Initialization
            if (containe) {
                var initID = '#' + containe;
                var init = new Swiper(initID, conf);
            };
        });
    };

    /* Showcase-6 */ 
    function obeliskShowcase6($scope, $) {
        $scope.find('.obelisk-showcase.style-6').each(function () {
            var parallaxShowCase6;
            var parallaxShowCaseOptions6 = {
                speed: 1000,
                autoplay: true,
                parallax: true,
                mousewheel: true,
                loop: true,

                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },

                pagination: {
                    el: '.obelisk-showcase.style-6 .parallax-slider .swiper-pagination',
                    clickable: true
                },

                navigation: {
                    nextEl: '.obelisk-showcase.style-6 .parallax-slider .next-ctrl',
                    prevEl: '.obelisk-showcase.style-6 .parallax-slider .prev-ctrl'
                }
            };
            parallaxShowCase6 = new Swiper('.obelisk-showcase.style-6 .parallax-slider', parallaxShowCaseOptions6);
        });
    };

   /* Team-4 */ 
    function obeliskTeam4() {

        $('.team .team-container').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '.team .prev',
            nextArrow: '.team .next',
            dots: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    jQuery(window).on('elementor/frontend/init', function () {

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-image.default', obeliskimage);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-testimonial.default', obelisktestim2);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-testimonial.default', obelisktestim4);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-testimonial.default', obelisktestim5);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-testimonial.default', obelisktestim6);

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-post-list.default', obeliskpostlist5);
        
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider0);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider1);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider2);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider6);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider7);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider8);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider9);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider10);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', obeliskSlider11);

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-screenshots.default', screenshots1);

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-portfolio.default', obeliskPortfolio6);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-portfolio.default', obeliskPortfolio10);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-portfolio.default', obeliskPortfolio11);

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-showcase.default', obeliskShowcase1);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-showcase.default', obeliskShowcase5);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-showcase.default', obeliskShowcase6);

        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-team.default', obeliskTeam4);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-post-list.default', postlistcontent8);
        elementorFrontend.hooks.addAction('frontend/element_ready/obelisk-post-list.default', postlistimage8);
        
    });


})(jQuery); 

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */