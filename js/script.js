$(document).ready(function() {
    //scrolling effects
	$('a[href^="#"]').on('click',function(e) {

        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({

            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });

    $(window).scroll(function(){

      var wScroll = $(this).scrollTop();
      $('.home-greet').css({
          'transform' : 'translate(0px, '+ wScroll * 0.9 +'%)'
      });

      console.log(wScroll);

    });

});
