jQuery(document).ready(function($) {

	function setHeights() {
		var mapheight = $(window).height();
		var headertop = '0';

		if ($('#wpadminbar').length != 0) {
			headertop =+ $('#wpadminbar').height();
		} 

		$('.header').css({
	 		'position': 'fixed',
			'top' : headertop + 'px'		
		}); 

		var headerheight = $('.header').outerHeight();
		var footerheight = $('.categories').outerHeight();

		$('.content').css({
	 		'margin-top': headerheight +'px',
	 		'margin-bottom': footerheight +'px'
		});	


		mapheight = mapheight - headertop;
		mapheight = mapheight - headerheight;
		mapheight = mapheight - footerheight;
		mapheight = mapheight - $('#controls').outerHeight();

		mapheight = mapheight - parseInt($('.content').css('padding-top'), 10);
		mapheight = mapheight - parseInt($('.content').css('padding-bottom'), 10);
		mapheight = mapheight - parseInt($('#map').css('margin-bottom'), 10);
		
		$('#map').css({
	 		'height': mapheight +'px'
		});	

	}

	$(window).resize(function() {
	  setHeights();
	});

  setHeights();

});

