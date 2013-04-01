var category_id; var category_name; var food_id; var food_list;

$(document).ready(function() {
	//$.get("../api/v1/malls",function(data){ //kopi's local
	$.get("/ayalamalls/api/v1/malls.json",function(data){
		$.each(data, function(i, mall_info) {
			if (mall_info.id == sessionStorage.mall_id) {
				$('#mall-name').html(mall_info.name);
			}
		});
	});

	// $.get("../api/v1/malls/"+sessionStorage.mall_id+"/foods",function(data){ // kopi's local
	$.get("/ayalamalls/api/v1/"+sessionStorage.mall_id+"/foods.json",function(data){
		if (jQuery.isEmptyObject(data)) {
			alert('There are no stores at this time. Please check back later.');
			window.location.href = "mall_features.html";
		}
		else {
			$('#myModal').reveal();
			$.each(data, function(i, food) { 
				getFoodInfo(food); 
			});
		}
	});
});

function getFoodInfo(food) {

	$(document).ready(function() {
		
		// $.get("../api/v1/malls/"+sessionStorage.mall_id+"/stores",function(data){ // kopi's local
		$.get("/ayalamalls/api/v1/"+sessionStorage.mall_id+"/stores.json",function(data){
			//data.sort(SortByStoreName);
			
			$.each(data, function(i, s) {
				var allStoresCtr = data.length;
				food_list = food; 

				if (s.store_id == food_list.store_id) {
					categories="";
					
					var categoriesCtr = s.categories.length;

					if (categoriesCtr > 1) {
						for(var b=0; b < categoriesCtr; b++)
						{ categories = categories + s.categories[b].name+" / "; }
					}
					else {
						for(var b=0; b < categoriesCtr; b++)
						{ categories = categories + s.categories[b].name; }
					}

					$('#foods').append('<li><a href="javascript:void(0);" onclick="javascript:getFoodId('+s.store_id+')"</a>'+s.store_name+'<div class="subtitle">'+categories+'</div><i class="icon-chevron-right icon-right"></i></li>');

					$('#myModal').trigger('reveal:close');
				}
			})
		});
	});
}

function getFoodId(fid) {
	sessionStorage.food_id = fid;
	window.location.href = "food_details.html";
}

function SortByStoreName(x,y) {
	//alert(x);
	return ((x.store_name == y.store_name) ? 0 : ((x.store_name > y.store_name) ? 1 : -1 ));
}

// Call Sort By Name






































/*function getCategoryId(cid) {
	alert(cid);
	sessionStorage.category_id = cid;
}*/