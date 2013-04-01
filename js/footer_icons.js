function show_active_state(id_active, id_regular){
	$(id_active).css({ 
		background: '#A29E9E',
		background: 'rgba(95, 95, 95, 0.7)',
		'-webkit-border-top-left-radius' : '5px !important', 
		'border-top-left-radius' : '5px !important',
		'-moz-border-radius-topleft' : '5px !important',
		'-webkit-border-bottom-left-radius' : '5px !important',
		'border-bottom-left-radius' : '5px !important',
		'-moz-border-radius-bottomleft' : '5px !important',
		'-webkit-border-top-right-radius' : '5px !important',
		'border-top-right-radius' : '5px !important',
		'-moz-border-radius-topright' : '5px !important',
		'-webkit-border-bottom-right-radius' : '5px !important',
		'border-bottom-right-radius' : '5px !important',
		'-moz-border-radius-bottomright' : '5px !important'
	});
	$(id_regular).css({ background:'transparent'});
}

$(document).ready(function(){
	$('a#now-showing').click(function(){
		if ($('img#now-showing-icon').attr('src') == 'img/360Art/now-showing.png') {
			$('img#now-showing-icon').attr('src', 'img/360Art/now-showing-active.png');
	    	$('img#coming-soon-icon').attr('src', 'img/360Art/coming-soon.png');
	    	$('div#now-showing-container').css('display','block');
			$('div#coming-soon-container').css('display','none');
			show_active_state('a#now-showing','a#coming-soon');
		}
	});

	$('a#coming-soon').click(function(){
		if ($('img#coming-soon-icon').attr('src') == 'img/360Art/coming-soon.png') {
			$('img#coming-soon-icon').attr('src', 'img/360Art/coming-soon-active.png');
	    	$('img#now-showing-icon').attr('src', 'img/360Art/now-showing.png');
	    	$('#coming-soon-container').css('display','block');
			$('#now-showing-container').css('display','none');
			show_active_state('a#coming-soon', 'a#now-showing');
		}
	});

	$('a#movie-details').click(function(){
		if ($('img#movie-details-icon').attr('src') == 'img/360Art/movie-details.png') {
			$('img#movie-details-icon').attr('src', 'img/360Art/movie-details-active.png');
	    	$('img#showtimes-icon').attr('src', 'img/360Art/showtimes.png');
	    	$('#movie-details-container').css('display','block');
			$('#showtimes-container').css('display','none');
			show_active_state('a#movie-details', 'a#showtimes');
		}
	});

	$('a#showtimes').click(function(){
		if ($('img#showtimes-icon').attr('src') == 'img/360Art/showtimes.png') {
			$('img#showtimes-icon').attr('src', 'img/360Art/showtimes-active.png');
	    	$('img#movie-details-icon').attr('src', 'img/360Art/movie-details.png');
	    	$('#showtimes-container').css('display','block');
			$('#movie-details-container').css('display','none');
			show_active_state('a#showtimes', 'a#movie-details');
		}
	});

	$('a#promotion').click(function(){
		if ($('img#promotion-icon').attr('src') == 'img/360Art/promotion.png') {
			$('img#promotion-icon').attr('src', 'img/360Art/promotion-active.png');
	    	$('img#store-location-icon').attr('src', 'img/360Art/store-location.png');
	    	$('#promotion-container').css('display','block');
			$('#store-location-container').css('display','none');
			show_active_state('a#promotion', 'a#store-location');
		}
	});

	$('a#store-location').click(function(){
		if ($('img#store-location-icon').attr('src') == 'img/360Art/store-location.png') {
			$('img#store-location-icon').attr('src', 'img/360Art/store-location-active.png');
	    	$('img#promotion-icon').attr('src', 'img/360Art/promotion.png');
	    	$('#store-location-container').css('display','block');
			$('#promotion-container').css('display','none');
			show_active_state('a#store-location', 'a#promotion');
		}
	});
});
