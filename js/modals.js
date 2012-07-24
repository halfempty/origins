jQuery(document).ready(function($) {

		jQuery.fn.showmodal = function() {
			hideModals();
			var thismodalwrap = $(this).find('.modalwrap');
			var thismargin = thismodalwrap.css('margin-top');
			
			$(this).addClass('open');

		  	thismodalwrap.modal({
				overlayClose:true,
				opacity: 0,
				zIndex: 100,
				autoPosition: false,
				onClose: function () {
					hideModals();
				},
				onShow: function (){

					$('#simplemodal-overlay').css({
				 		'margin-top': thismargin
					});

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

		$('#listtoggle').bind('click', function() {

			if ( $(this).hasClass('selected') ) {
			} else {
				hideModals();
				$(this).addClass('selected');
				$('#maptoggle').removeClass('selected');
				$('#map').hide();
				$('.listview').show();
				$('html, body').animate({ scrollTop: $('.listview').offset().top }, 'slow');
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

		// On Load

		$('.listview').hide();




});
