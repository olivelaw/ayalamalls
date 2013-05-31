var movie_id, title, tcode;

$(document).ready(function() {
	// $.get("../api/v1/malls",function(data){ // kopi's local
    if (sessionStorage.mall_id == null) {
        alert("Please select mall first.");
        window.location.href = "index.html";
    }
    else{
        $.get("/ayalamalls/api/v1/malls.json",function(data){
            $.each(data, function(i, mall_info) {
                if (mall_info.id == sessionStorage.mall_id) {
                    $('#mall-name').html(mall_info.name);
                    sessionStorage.tcode = mall_info.tcode; // kopi's local
                }
            });
        });
    }
 });

function getMovie(title) {
	sessionStorage.title = title;
	window.location.href = "movie_details.html";
}

function getCsMovie(csMovie) {
    sessionStorage.csMovie = csMovie;
    window.location.href = "coming_soon.html";
}

$(document).ready(function() { 
    
    // NOW SHOWING
    $.ajax({  
        type: "GET",  
        //url: "../api/v1/sureseats_api?action=schedule", // kopi's local
        url: "/ayalamalls/xml/schedule.xml",  
        dataType: "xml",  
        success: getSchedule  
    });
    
    scheduleXML="";

    function getSchedule(cinemaData){
        scheduleXML = cinemaData;
        onReceiveXML(scheduleXML);
    }
    function onReceiveXML(scheduleXML) {
        var ctr = 0;

        $('#myModal').reveal();

        var mallTheaterCode = sessionStorage.tcode;
        console.log(scheduleXML);

        $(scheduleXML).find("Schedule").each(function(){
            
            var scheduleTheaterCode = $(this).find("theater_code").text();

            // if (scheduleTheaterCode == mallTheaterCode) {
            //     ctr++;
            //     getMoviesByMall($(this));
            //     $('#myModal').trigger('reveal:close');
            // }

            if(mallTheaterCode.indexOf(scheduleTheaterCode) != -1){
                ctr++;
                getMoviesByMall($(this));
                $('#myModal').trigger('reveal:close');
            }
        });
        if (ctr <= 0) {
            alert('There are no movies at this time. Please check back later.');
            window.location.href = "mall_features.html";
        }
        ctr = 0;
    } 

    var moviesFilteredByMall = [];

    function getMoviesByMall(movies) {
        
        var movieTitle = movies.find("movie_title").text();
        var movieScreening = movies.find("screening").text();

        if($.inArray(movieTitle, moviesFilteredByMall) == -1) {
            moviesFilteredByMall[moviesFilteredByMall.length] = movieTitle;
        }
        else{
            return;
        }

        $("#now_showing").append('<li><a href="javascript:void(0);" onclick="getMovie(\''+movieTitle+'\');"><div class="movie-title" id="movie-title">'+movieTitle+'</div><div class="subtitle">Next Showtime: '+movieScreening+'</div></a></li>'); 
    }

    // COMING SOON
    $.ajax({  
        type: "GET",  
        // url: "../api/v1/sureseats_api?action=comingsoon", // kopi's local
        url: "/ayalamalls/xml/coming_soon.xml",  
        dataType: "xml",  
        success: parseXml  
    });

    function parseXml(xml) {
        $(xml).find("Coming_Soon").each(function() {
            var csMovie = $(this).find("movie_title").text();
            $("#coming_soon").append('<li><a href="javascript:void(0);" onclick="getCsMovie(\''+csMovie+'\');"><div class="movie-title" id="movie-title">'+csMovie+'</div><div class="subtitle">'+$(this).find("tentative").text()+'</div></a></li>'); 
        });
    }
});