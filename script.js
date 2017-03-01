$(document).ready(function(){

	var btt = $('.contacts');

	$(window).on('scroll', function(){

		var self = $(this),
		height = self.height(),
		top = self.scrollTop();
        console.log(top);
//		if(top > height){
//			if(!btt.is('visible')){
//				btt.show();
//			}
//		}else{
//			btt.hide();
//		}
	})

	btt.on('click', function(event){

		$('html, body').animate({
			scrollTop: 0
		},500);
		event.preventDefault();
	});

});