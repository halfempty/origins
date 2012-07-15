var imagemarker = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-picture.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(20, 34));
var linkmarker = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-link.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(20, 34));
var audiomarker = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-audio.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(20, 34));
var videomarker = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-video.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(20, 34));
var standardmarker = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-standard.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(20, 34));
var shadow = new google.maps.MarkerImage("/wp-content/themes/origins-dev/images/marker-shadow.png", null, null, new google.maps.Point(0, 34), new google.maps.Size(37, 34));

var gmarkers = []; // An array to hold our markers for later manipulation
var infowindow = new google.maps.InfoWindow();
var map = null;

function initialize() {

	map = new google.maps.Map(document.getElementById('map'), { zoom: 12, center: new google.maps.LatLng(34.059910, -118.126012), mapTypeId: google.maps.MapTypeId.ROADMAP,   mapTypeControl: false });

	for (var i = 0; i < locations.length; i++) {  

		if ( locations[i].format == 'image' ) {
			var thisicon = imagemarker;
		} else if ( locations[i].format == 'link' ) {
			var thisicon = linkmarker;
		} else if ( locations[i].format == 'audio' ) {
			var thisicon = audiomarker;
		} else if ( locations[i].format == 'video' ) {
			var thisicon = videomarker;
		} else {
			var thisicon = standardmarker;
		}


	  var marker = new google.maps.Marker({
	    position: locations[i].latlng,
	    shadow: shadow,
	    icon: thisicon,
	    map: map,
		format : locations[i].format,
		group : locations[i].group,
		optimized : false
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


	$('#formats li').bind('click', function() {
		if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			} else {
				$(this).addClass('selected');
			}

		updateMarkers();

	});


});