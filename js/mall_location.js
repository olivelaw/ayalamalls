var mall_coords;

$(document).ready(function() {
	$.get("../api/v1/malls",function(data){
		$.each(data, function(i, mall_info) {
			if (mall_info.id == sessionStorage.mall_id) {
				$('#mall-name').html(mall_info.name);
				mall_coords = mall_info.coordinates;
			}
		});
	});
 });

$.ready(function() {
	$(".button").forEach(function(button) {
		button.bind("touchstart", function() {
			button.addClass("touched");
		});
		button.bind("touchend", function() {
			button.removeClass("touched");
		});
	});
});

$(function() {
    // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
    var yourStartLatLng = new google.maps.LatLng(mall_coords);
    $('#map_canvas').gmap({'center': yourStartLatLng});
});