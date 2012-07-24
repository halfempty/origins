jQuery(document).ready(function($) {


	function updateMarkers() {
		  infowindow.close();

			if ( $('#linktoggle').hasClass('selected') ) var linktoggle = "on"; 
			if ( $('#imagetoggle').hasClass('selected') ) var imagetoggle = "on"; 
			if ( $('#videotoggle').hasClass('selected') ) var videotoggle = "on";
			if ( $('#audiotoggle').hasClass('selected') ) var audiotoggle = "on";
			if ( $('#standardtoggle').hasClass('selected') ) var standardtoggle = "on";			

		  for (var i = 0; i < gmarkers.length; i++) {

		    if (gmarkers[i].format == "link" && linktoggle == "on") {
      			gmarkers[i].setVisible(true);
		    } else if (gmarkers[i].format == "image" && imagetoggle == "on") {
	      		gmarkers[i].setVisible(true);
		    } else if (gmarkers[i].format == "video" && videotoggle == "on") {
	      		gmarkers[i].setVisible(true);
		    } else if (gmarkers[i].format == "audio" && audiotoggle == "on") {
		    	gmarkers[i].setVisible(true);
		    } else if (gmarkers[i].format == "standard" && standardtoggle == "on") {
	      		gmarkers[i].setVisible(true);
			} else {
		      gmarkers[i].setVisible(false);				
			}

		  }

		if (linktoggle == "on") {
    		$('.listview .link').show();
		} else {
			$('.listview .link').hide();
		}

		if (imagetoggle == "on") {
    		$('.listview .image').show();
		} else {
			$('.listview .image').hide();
		}

		if (videotoggle == "on") {
    		$('.listview .video').show();
		} else {
			$('.listview .video').hide();
		}

		if (audiotoggle == "on") {
    		$('.listview .audio').show();
		} else {
			$('.listview .audio').hide();
		}

		if (standardtoggle == "on") {
    		$('.listview .standard').show();
		} else {
			$('.listview .standard').hide();
		}

	}


	$('#formatsmodal li').bind('click', function() {
		if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			} else {
				$(this).addClass('selected');
			}

		updateMarkers();

	});


});
