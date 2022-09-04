$(function(){
    
//    js for slider
    
    $('.slider_wrapper').slick({
    nextArrow: '.right_arrow',
    prevArrow: '.left_arrow',
	dots: true,
    vertical:false,
	infinite: false,
	speed: 1000,
	fade: false,
	autoplay: false,
	arrows: true,
    pauseOnHover:true,
   
}); 

$('.right_arrow').click(function(){
    $('.right_arrow').addClass('right_active');
});
    
//    js for second_slider
    
    $('.slider_wrapper2').slick({
    nextArrow: '.right_arrow2',
    prevArrow: '.left_arrow2',
	dots: true,
    vertical:false,
	infinite: true,
	speed: 1000,
	fade: false,
	autoplay: true,
	arrows: true,
    pauseOnHover:true,
   
});
    
//here script for  video venobox plagin

$(document).ready(function(){
  $('.venobox').venobox({
      spinner:'three-bounce',
      spinColor: '#ddd',
  }); 
});
    
    
    
    
//    here js for sticky menubar
    
    $(window).on('scroll', function() {
        if($(window).scrollTop() >300 ){
            $('.navbar').addClass('scroll_bg')
        }
        else {
            $('.navbar').removeClass('scroll_bg')
        }
    });
    
    
    
    
    
    //==== Animate the scroll to top
    
    $('.back_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 900) {
            $('.back_to_top').fadeIn(600)
        } else {
            $('.back_to_top').fadeOut(600)
        }
    });
    
    
    
//here css for mixitup filter
    var mixer = mixitup('.mixitup_gallery');
    
    
    
//    here js for preloader
    
    $(window).on('load', function (event) {  
        $('.preloader_bg').delay(300).fadeIn(300);
        
        $('.preloader_bg').delay(500).fadeOut(500);
    }); 
    
    
    
    
//    select option
    
    
    $(".nice_select").niceSelect();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})