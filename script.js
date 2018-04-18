$(document).ready(function() {

 function weatherURLWithSearchTerm(searchTerm) {
        var apiKey = '1dbc470097a956c9c8ed70c45560e0d0';
        var zipcode = 11201;
        var countrycode="us";
        var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ',' + countrycode + "&units=imperial&APPID=1dbc470097a956c9c8ed70c45560e0d0";
        return url;
    }
    function appendWeatherToBody(weatherURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $('.results').append(weatherURL);
    }
    function callWeatherAPIWithSearchTerm(searchTerm) {
        var url = weatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                //console.log(response)
                var weather_url = response.main.temp;
                //console.log(weather_url);
                appendWeatherToBody(weather_url);
            },
        });
    }
    $("#button").click(function() {
        var searchTerm = $('#input').val();
        clearList();
        callWeatherAPIWithSearchTerm();
    });
    $("#clear").click(function() {
        $(".results").empty();
    });
    function clearList() {
        $('.reults').empty();
     
    }
});