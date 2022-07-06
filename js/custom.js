/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR Taj Kwick Fit            |||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
***************************************************************************************************************/

"use strict";

//===RevolutionSliderActiver===
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            startwidth:1170,
		    startheight:750,
            
            navigationType:"bullet",
		    navigationArrows:"0",
		    navigationStyle:"preview4",
            
            dottedOverlay:'yes',
            
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
            gridwidth: [1170],
            gridheight: [750]
		});
	}; 
    
    if ($('.rev_slider_wrapper #slider2').length) {
		$("#slider2").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            startwidth:1170,
		    startheight:870,
            
            navigationType:"bullet",
		    navigationArrows:"0",
		    navigationStyle:"preview4",
            
            dottedOverlay:'yes',
            
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
            gridwidth: [1170],
            gridheight: [870]
		});
	};
    
    if ($('.rev_slider_wrapper #slider3').length) {
		$("#slider3").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            startwidth:1170,
		    startheight:640,
            
            navigationType:"bullet",
		    navigationArrows:"0",
		    navigationStyle:"preview4",
            
            dottedOverlay:'yes',
            
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
            gridwidth: [1170],
            gridheight: [640]
		});
	};
    
    if ($('.rev_slider_wrapper #slider4').length) {
		$("#slider4").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            startwidth:1170,
		    startheight:855,
            
            navigationType:"bullet",
		    navigationArrows:"0",
		    navigationStyle:"preview4",
            
            dottedOverlay:'yes',
            
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
            gridwidth: [1170],
            gridheight: [855]
		});
	};  
}

//=== Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(0).fadeOut(500);
    }
}

//====Main menu===
function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

}



//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}



//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}







//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }

        });
    };
}



//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}

}



//===Testimonial Slider===
function testimonialSlider() {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
    }
}



//===Testimonial Slider===
function testimonialSlidertwo() {
    if ($('.testimonial-carousel-two').length) {
        $('.testimonial-carousel-two').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        })
    }
}



//===Testimonial Slider===
function testimonialSliderthree() {
    if ($('.testimonial-carousel-3').length) {
        $('.testimonial-carousel-3').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        })
    }
}




//=== History Carousel ===
function teamCarousel() {
    if ($('.team-carousel').length) {
        $('.team-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })
    }
}



//=== History Carousel ===
function serviceCarousel2() {
    if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav: false,
            dots: true,
            autoplayHoverPause:false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        })
    }
}



//===Project Single Carousel===
function projectCarousel () {
    if ($('.project-single-carousel').length) {
        $('.project-single-carousel').owlCarousel({
            dots: true,
            loop:true,
            margin:30,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//===Achivement Carousel===
function serviceCarousel() {
    if ($('.servicecarousel').length) {
        $('.servicecarousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots: false,
            autoplayHoverPause:false,
            autoplay: 10000,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1100:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })
    }
}



//===Prettyphoto Lightbox===
function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        slideshow:3000,
        autoplay_slideshow: false,
        fullscreen: true,
        social_tools: false
    });
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}



//===Brand Carousel===
function brandCarousel () {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop:true,
            margin:20,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        });    		
    }
}



//===Event Carousel===
function eventCarousel () {
    if ($('.event-carousel').length) {
        $('.event-carousel').owlCarousel({
            dots: false,
            loop:true,
            margin:30,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}




//=== Fact counter ===
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}

}



//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}



//=== Accordion ===
function accordion() {
        if($('.accordion-box').length){
            $('.accordion-box .accord-btn').on('click', function() {
        if($(this).hasClass('active')!==true){
            $('.accordion-box .accord-btn').removeClass('active');
        }

        if ($(this).next('.accord-content').is(':visible')){
            $(this).removeClass('active');
            $(this).next('.accord-content').slideUp(500);
        }

        else{
            $(this).addClass('active');
            $('.accordion-box .accord-content').slideUp(500);
            $(this).next('.accord-content').slideDown(500); 
        }
      });
    }
}



//=== Cart Touch Spin ===
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}






// Select menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}



//  Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}


// ===Date picker ===
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



//=== Time picker===
function timepicker () {
    $('input[name="time"]').ptTimeSelect();
}




//=== Add comment Form Validation ===
if($("#add-comment-form").length){
    $("#add-comment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



//=== Review Form Validation ===
if($("#consultation-form").length){
    $("#consultation-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



//=== Review Form Validation ===
if($("#review-form").length){
    $("#review-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



//=== Review Form Validation ===
if($("#request-form").length){
    $("#request-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



// Elements Animation
if($('.wow').length){
    var wow = new WOW({
    mobile:       false
    });
    wow.init();
}




// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        revolutionSliderActiver ();
        mainmenu ();
        scrollToTop ();
        searchbox ();
        testimonialSlider ();
        testimonialSlidertwo ();
        testimonialSliderthree ();
        languageSwitcher ();
        selectDropdown ();
        CounterNumberChanger ();
        accordion ();
        projectMasonaryLayout ();
        priceFilter ();
        cartTouchSpin ();
        teamCarousel ();
        projectCarousel ();
        serviceCarousel ();
        serviceCarousel2 ();
        brandCarousel ();
        prettyPhoto ();
        datepicker ();
        timepicker ();
        tooltip ();
        eventCarousel ()

        

	})(jQuery);
});


// Scroll Function
jQuery(window).on('scroll', function(){
	(function ($) {
	stickyHeader ()
    
	})(jQuery);
});



// Instance Of Fuction While Window Load event
jQuery(window).on('load', function() {
    (function($) {
        prealoader ();
        
    })(jQuery);
});



