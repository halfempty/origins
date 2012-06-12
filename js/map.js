

var gmarkers = []; // An array to hold our markers for later manipulation
var infowindow = new google.maps.InfoWindow();
var map = null;

function initialize() {

	map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: new google.maps.LatLng(34.059910, -118.126012), mapTypeId: google.maps.MapTypeId.ROADMAP,   mapTypeControl: false });

	for (var i = 0; i < locations.length; i++) {  

		if ( locations[i].format == 'image' ) {
			if ( locations[i].group == 'A' ) {
				var thisicon = bluemarkera;
			} else if ( locations[i].group == 'A' ) {
				var thisicon = bluemarker;			
			} else if ( locations[i].group == 'B' ) {
				var thisicon = bluemarkerb;
			} else if ( locations[i].group == 'C' ) {
				var thisicon = bluemarkerc;
			} else if ( locations[i].group == 'D' ) {
				var thisicon = bluemarkerd;
			} else {
				var thisicon = bluemarker;
			}

		} else if ( locations[i].format == 'link' ) {
			if ( locations[i].group == 'A' ) {
				var thisicon = greenmarkera;
			} else if ( locations[i].group == 'A' ) {
				var thisicon = greenmarker;			
			} else if ( locations[i].group == 'B' ) {
				var thisicon = greenmarkerb;
			} else if ( locations[i].group == 'C' ) {
				var thisicon = greenmarkerc;
			} else if ( locations[i].group == 'D' ) {
				var thisicon = greenmarkerd;
			} else {
				var thisicon = greenmarker;
			}

		} else if ( locations[i].format == 'audio' ) {
			if ( locations[i].group == 'A' ) {
				var thisicon = orangemarkera;
			} else if ( locations[i].group == 'A' ) {
				var thisicon = orangemarker;			
			} else if ( locations[i].group == 'B' ) {
				var thisicon = orangemarkerb;
			} else if ( locations[i].group == 'C' ) {
				var thisicon = orangemarkerc;
			} else if ( locations[i].group == 'D' ) {
				var thisicon = orangemarkerd;
			} else {
				var thisicon = orangemarker;
			}

		} else if ( locations[i].format == 'video' ) {
			if ( locations[i].group == 'A' ) {
				var thisicon = redmarkera;
			} else if ( locations[i].group == 'A' ) {
				var thisicon = redmarker;			
			} else if ( locations[i].group == 'B' ) {
				var thisicon = redmarkerb;
			} else if ( locations[i].group == 'C' ) {
				var thisicon = redmarkerc;
			} else if ( locations[i].group == 'D' ) {
				var thisicon = redmarkerd;
			} else {
				var thisicon = redmarker;
			}

		} else {
			if ( locations[i].group == 'A' ) {
				var thisicon = pinkmarkera;
			} else if ( locations[i].group == 'A' ) {
				var thisicon = pinkmarker;			
			} else if ( locations[i].group == 'B' ) {
				var thisicon = pinkmarkerb;
			} else if ( locations[i].group == 'C' ) {
				var thisicon = pinkmarkerc;
			} else if ( locations[i].group == 'D' ) {
				var thisicon = pinkmarkerd;
			} else {
				var thisicon = pinkmarker;
			}

		}


	  var marker = new google.maps.Marker({
	    position: locations[i].latlng,
	    shadow: shadow,
	    icon: thisicon,
	    map: map,
		format : locations[i].format,
		group : locations[i].group
	  });

	// Save a reference to the newly created marker for later manipulation
      gmarkers.push(marker);

	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
	    return function() {
	      infowindow.setContent(locations[i].info);
	      infowindow.open(map, marker);
	    }
	  })(marker, i));
	}
}





$.noConflict();
jQuery(document).ready(function($) {



	function updateMarkers() {
		  infowindow.close();

			if ( $('#linktoggle').hasClass('selected') ) var linktoggle = "on"; 
			if ( $('#imagetoggle').hasClass('selected') ) var imagetoggle = "on"; 
			if ( $('#videotoggle').hasClass('selected') ) var videotoggle = "on";
			if ( $('#audiotoggle').hasClass('selected') ) var audiotoggle = "on";
			if ( $('#standardtoggle').hasClass('selected') ) var standardtoggle = "on";			

			if ( $('#atoggle').hasClass('selected') ) var atoggle = "on";
			if ( $('#btoggle').hasClass('selected') ) var btoggle = "on";
			if ( $('#ctoggle').hasClass('selected') ) var ctoggle = "on";
			if ( $('#dtoggle').hasClass('selected') ) var dtoggle = "on";

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


	$('.format li').bind('click', function() {
		if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			} else {
				$(this).addClass('selected');
			}

		updateMarkers();

	});


	$('.listview').hide();

	$('#listtoggle').bind('click', function() {
		if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
				$('#maptoggle').addClass('selected');
				$('#map').show();
				$('.listview').hide();
			} else {
				$(this).addClass('selected');
				$('#maptoggle').removeClass('selected');
				$('#map').hide();
				$('.listview').show();
			}
	});

	$('#maptoggle').bind('click', function() {
		if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
				$('#listtoggle').addClass('selected');
				$('#map').hide();
				$('.listview').show();
			} else {
				$(this).addClass('selected');
				$('#listtoggle').removeClass('selected');
				$('#map').show();
				$('.listview').hide();
			}

	});


});




