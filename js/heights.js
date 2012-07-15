jQuery(document).ready(function($) {

	function setHeights() {
		var mapheight = $(window).height();
		
		var headertop = 0;

		if ($('#wpadminbar').length != 0) {
			headertop =+ $('#wpadminbar').height();
		} 
	// console.log('wpadminbar.' + headertop);

		$('.header').css({
	 		'position': 'fixed',
			'top' : headertop + 'px'		
		}); 

		var headerheight = $('.header').outerHeight();
	// console.log('Header.' + headerheight);

		var footerheight = $('#categories').outerHeight();


		mapheight = mapheight - headertop;		
		mapheight = mapheight - headerheight;
		mapheight = mapheight - footerheight;

		modalpadding = headertop + headerheight;
	// console.log('Padding.' + modalpadding);

		
		$('#map').css({
	 		'margin-top': headerheight +'px',
	 		'height': mapheight +'px'
		});	

		$('#content').css({
	 		'margin-top': headerheight +'px',
	 		'height': mapheight +'px'
		});

		// console.log('modalPadding 1: ' + modalpadding);

		$('.modalwrap').css({
	 		'margin-top': modalpadding +'px'
		});


	}

	$(window).resize(function() {
	  setHeights();
	});

  setHeights();

});

