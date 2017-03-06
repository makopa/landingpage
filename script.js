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

});
