(function ($) {
    "use strict"

    //Navbar on Scrolling

    $(window).scroll(function (){
        if ($(this).scrollTop() > 200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }else{
            $('.navbar').fadeOut('slow').css('dispaly','none');
        }
    });

    //Typed Initiate
    if($('.typed-text-output').length == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings:typed_strings.split(', '),
            typeSpeed:50,
            backSpeed: 5,
            smartBackspace:false,
            loop: true
        });


   
        // skills 
        $('.skill').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

