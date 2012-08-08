jQuery(document).ready(function($) {

	function setHeights() {
		var mapheight = $(window).height();
		
		var headertop = 0;

		if ($('#wpadminbar').length != 0) {
			headertop =+ $('#wpadminbar').outerHeight();
		} 
	// console.log('wpadminbar.' + headertop);

		$('.header').css({
	 		'position': 'fixed',
			'top' : '0',
			'marginTop' : headertop + 'px'		
		}); 

		var headerheight = $('.header').outerHeight();
		headerheight= headerheight - 1;
		
	// console.log('Header.' + headerheight);

		var footerheight = $('#categories').outerHeight();


		mapheight = mapheight - headertop;		
		mapheight = mapheight - headerheight;
		mapheight = mapheight - footerheight;
		mapheight = mapheight + 1;
	
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

