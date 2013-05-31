var promo_id;

function getPromoId(pid) {
	sessionStorage.promo_id = pid;
	window.location.href = "promo_details.html";
}

$(document).ready(function() {
	//$.get("../api/v1/malls",function(data){ //kopi's local
	$.get("/ayalamalls/api/v1/malls.json",function(data){
		$.each(data, function(i, mall_info) {
			if (mall_info.id == sessionStorage.mall_id) {
				$('#mall-name').html(mall_info.name);
			}
		});
	});

	// $.get("../api/v1/malls/"+sessionStorage.mall_id+"/announcements",function(data){ // kopi's local
	$.get("/ayalamalls/api/v1/"+sessionStorage.mall_id+"/promos.json",function(data){
		if (jQuery.isEmptyObject(data)) {
				alert('There are no promos at this time. Please check back later.');
				window.location.href = "mall_features.html";
		}
		else {
			$('#myModal').reveal();
			$.each(data, function(i, promos) {
				$('#promos-list').append('<li><a href="javascript:void(0);" onclick="getPromoId('+promos.id+');"><img src="http://' + promos.banner_url + '" width="100%" height="120px"></a></li>');
			});
			$('#myModal').trigger('reveal:close');
		}
	});
});