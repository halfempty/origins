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

//		mapheight = mapheight - $('#controls').outerHeight();

//		mapheight = mapheight - parseInt($('.content').css('padding-top'), 10);
//		mapheight = mapheight - parseInt($('.content').css('padding-bottom'), 10);
//		mapheight = mapheight - parseInt($('#map').css('margin-bottom'), 10);
		
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
		$('#simplemodal-overlay').css({
	 		'margin-top': modalpadding +'px'
		});



	}

	$(window).resize(function() {
	  setHeights();
	});

  setHeights();


	/* Header Buttons */

	jQuery.fn.showmodal = function() {
		hideModals();
//		var currentId = $(this).attr('id');


		$(this).addClass('open');
	  	$(this).find('.modalwrap').modal({
			overlayClose:true,
			opacity: 0,
			zIndex: 100,
			autoPosition: false,
			onClose: function () {
				hideModals();
			},
			onShow: function (){
				setHeights();
			}
		});
	};
		


	function hideModals() {
		$.modal.close();
		$('.open').removeClass('open');
	// console.log('current');
	};

	
	$('#formats h4').click(function(){
		if ( $('#formats').hasClass('open') ) {
			hideModals();
		} else {
		  	$('#formats').showmodal();
		}
	});

	$('#share h4').click(function(){
		if ( $('#share').hasClass('open') ) {
			hideModals();
		} else {
		  	$('#share').showmodal();
		}
	});

	$('#info h4').click(function(){
		if ( $('#info').hasClass('open') ) {
			hideModals();
		} else {
		  	$('#info').showmodal();
		}
	});

	$('.modal').click(function(event){
	// console.log('modal click');
		event.stopPropagation();
	});



	$('.listview').hide();

	$('#listtoggle').bind('click', function() {

		if ( $(this).hasClass('selected') ) {
		} else {
			hideModals();
			$(this).addClass('selected');
			$('#maptoggle').removeClass('selected');
			$('#map').hide();
			$('.listview').show();
		}
	});

	$('#maptoggle').bind('click', function() {

		if ( $(this).hasClass('selected') ) {
		} else {
			hideModals();
			$(this).addClass('selected');
			$('#listtoggle').removeClass('selected');
			$('#map').show();
			$('.listview').hide();
		}

	});

});

