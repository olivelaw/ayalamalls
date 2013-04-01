var mall_id;

function getMallId(mid){
	sessionStorage.mall_id = mid;
	window.location.href = "mall_features.html";
}

$(document).ready(function() {
	var mall;

	//$.get("../api/v1/malls",function(data){ //kopi's local
	$.get("/ayalamalls/api/v1/malls.json",function(data){
		$.each(data, function(i, malls) { 
			mall = '<li class="option"><a href="javascript:void(0);" onclick="getMallId('+malls.id+');"><img src="' + malls.logo_url + '" width="62px" height="62px"></a></li>';
			$('#menu').append(mall);
		});
	});
});

