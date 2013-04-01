var event_id;

function getEventId(eid) {
	sessionStorage.event_id = eid;
	window.location.href = "event_details.html";
}

$(document).ready(function() {
	// $.get("../api/v1/malls/"+sessionStorage.mall_id+"/events",function(data){ // kopi's local
	$.get("/ayalamalls/api/v1/"+sessionStorage.mall_id+"/events.json",function(data){
		if (jQuery.isEmptyObject(data)) {
			alert('There are no events at this time. Please check back later.');
			window.location.href = "mall_features.html";
		}
		else {
			$('#myModal').reveal();
			$.each(data, function(i, events) {
				$('#events-list').append('<li><a href="javascript:void(0);" onclick="getEventId('+events.id+');"><img src="' + events.banner_url + '" width="100%" height="80px"></a></li>');
			});
			$('#myModal').trigger('reveal:close');
		}
	});

	//$.get("../api/v1/malls",function(data){ //kopi's local
	$.get("/ayalamalls/api/v1/malls.json",function(data){
		$.each(data, function(i, mall_info) {
			if (mall_info.id == sessionStorage.mall_id) {
				$('#mall-name').html(mall_info.name);
			}
		});
	});
});