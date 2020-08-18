$(document).ready(function() {


	if(window.location.href.indexOf('index') > -1 || window.location.href.indexOf('juegos') > -1 ){
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200,
		    responsive: true		   
	  	});
	}


	$('.subir').click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

});



