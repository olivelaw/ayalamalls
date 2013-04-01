var store_id; var category_id; var category_name;

function is_numeric(num) {
    return (num >=0 || num < 0);
}

function getStoreId(sid) {
	sessionStorage.store_id = sid;
	window.location.href = "store_details.html";
}

function getCategoryId(cid) {
	sessionStorage.category_id = cid;

	$.get("../api/v1/malls"+sessionStorage.mall_id+"/stores.json",function(data){
		var allStoresCtr = data.length; 

		for(var a=0; a < allStoresCtr; a++)
		{
			var categoriesCtr = data[a].categories.length;
			for(var b=0; b < categoriesCtr; b++)
			{
				if (sessionStorage.category_id == data[a].categories[b].id) {
					$('#stores-by-category').append('<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+data[a].store_id+');">'+data[a].store_name+'</a></li>');
					$('#category-name').html(data[a].categories[b].name);
					$('#stores-by-category').css("display","block");
					$('#categories').css("display","none");
				}
			}
		}
	});
}

function showCategoryList() {
	$('#stores-container').css("display","none");
	$('#categories-container').css("display","block");
}

function showAllStores() {
	$('#stores-container').css("display","block");
	$('#categories-container').css("display","none");
}

$(document).ready(function() {
	$.get("/ayalamalls/api/v1/malls.json",function(data){
		$.each(data, function(i, mall_info) {
			if (mall_info.id == sessionStorage.mall_id) {
				$('#mall-name').html(mall_info.name);
			}
		});
	});

	$.get("/ayalamalls/api/v1/categories.json",function(data){
		$.each(data, function(i, categories) {
			$('#categories').append('<li><a href="javascript:void(0);" onclick="javascript:getCategoryId('+categories.id+');">'+categories.name+'</a></li>');
			$('#categories').css("display","block");
		});
	});

	var store_item;
	if (sessionStorage) {
		$.get("/ayalamalls/api/v1/"+sessionStorage.mall_id+"/stores.json",function(data){
			$("#mall-name").html(data[0].mall_name);
			storeSorted = {};

			$.each(data, function(i, store) {
				var key = store.store_name.substring(0,1); //by letter
				var lastIndex = 0;
				if(key in storeSorted){
					lastIndex = storeSorted[key].length;
				}
				else {
					storeSorted[key] = [];
				}
				storeSorted[key][lastIndex] = store; //enter data from json
			});

			for(var key in storeSorted) { //first loop of letters (keys)
				if (is_numeric(key)) {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_num').css("display","block");
						$('#store_list_num').append(store_item);
					}
				}
				else if (key == 'A' || key == 'a') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_a').css("display","block");
						$('#store_list_a').append(store_item);
					}
				}
				else if (key == 'B' || key == 'b') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_b').css("display","block");
						$('#store_list_b').append(store_item);
					}
				}
				else if (key == 'C' || key == 'c') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_c').css("display","block");
						$('#store_list_c').append(store_item);
					}
				}
				else if (key == 'D' || key == 'd') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_d').css("display","block");
						$('#store_list_d').append(store_item);
					}
				}
				else if (key == 'E' || key == 'e') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_e').css("display","block");
						$('#store_list_e').append(store_item);
					}
				}
				else if (key == 'F' || key == 'f') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_f').css("display","block");
						$('#store_list_f').append(store_item);
					}
				}
				else if (key == 'G' || key == 'g') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_g').css("display","block");
						$('#store_list_g').append(store_item);
					}
				}
				else if (key == 'H' || key == 'h') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_h').css("display","block");
						$('#store_list_h').append(store_item);
					}
				}
				else if (key == 'I' || key == 'i') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_i').css("display","block");
						$('#store_list_i').append(store_item);
					}
				}
				else if (key == 'J' || key == 'j') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_j').css("display","block");
						$('#store_list_j').append(store_item);
					}
				}
				else if (key == 'K' || key == 'k') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_k').css("display","block");
						$('#store_list_k').append(store_item);
					}
				}
				else if (key == 'L' || key == 'l') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_l').css("display","block");
						$('#store_list_l').append(store_item);
					}
				}
				else if (key == 'M' || key == 'm') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_m').css("display","block");
						$('#store_list_m').append(store_item);
					}
				}
				else if (key == 'N' || key == 'n') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_n').css("display","block");
						$('#store_list_n').append(store_item);
					}
				}
				else if (key == 'O' || key == 'o') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_o').css("display","block");
						$('#store_list_o').append(store_item);
					}
				}
				else if (key == 'P' || key == 'p') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_p').css("display","block");
						$('#store_list_p').append(store_item);
					}
				}
				else if (key == 'Q' || key == 'q') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_q').css("display","block");
						$('#store_list_q').append(store_item);
					}
				}
				else if (key == 'R' || key == 'r') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_r').css("display","block");
						$('#store_list_r').append(store_item);
					}
				}
				else if (key == 'S' || key == 's') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_s').css("display","block");
						$('#store_list_s').append(store_item);
					}
				}
				else if (key == 'T' || key == 't') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_t').css("display","block");
						$('#store_list_t').append(store_item);
					}
				}
				else if (key == 'U' || key == 'u') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_u').css("display","block");
						$('#store_list_u').append(store_item);
					}
				}
				else if (key == 'V' || key == 'v') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_v').css("display","block");
						$('#store_list_v').append(store_item);
					}
				}
				else if (key == 'W' || key == 'w') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_w').css("display","block");
						$('#store_list_w').append(store_item);
					}
				}
				else if (key == 'X' || key == 'x') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_x').css("display","block");
						$('#store_list_x').append(store_item);
					}
				}
				else if (key == 'Y' || key == 'y') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_y').css("display","block");
						$('#store_list_y').append(store_item);
					}
				}
				else if (key == 'Z' || key == 'z') {
					for(var ctr = 0; ctr < storeSorted[key].length; ctr++){ //second loop of letters (keys)
						store_item = '<li><a href="javascript:void(0);" onclick="javascript:getStoreId('+storeSorted[key][ctr].store_id+');">' + storeSorted[key][ctr].store_name + '</a></li>';
						$('#store_list_z').css("display","block");
						$('#store_list_z').append(store_item);
					}
				}
			}
		});
	}
	else{
		alert('There are no stores yet.');
	}
}); 