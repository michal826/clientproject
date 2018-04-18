$(document).ready(function() {

 function weatherURLWithSearchTerm(searchTerm) {
        var apiKey = '1dbc470097a956c9c8ed70c45560e0d0';
        var zipcode = 11201;
        varcountrycode="us";
        var url = "api.openweathermap.org/data/2.5/weather?zip={zipcode}{countrycode}";
        return url;
    }
    function appendImageToBody(weatherURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $('.results').append();
       
    }
    function callWeatherAPIWithSearchTerm(searchTerm) {
        var url = weatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                //console.log(response)
                var weather_url = response.data[0].main.temp.url;
                console.log(weather_url);
                appendWeatherToBody(weather_url);
            },
        });
    }
    $("#button").click(function() {
        var searchTerm = $('#input').val();
        clearList();
        weatherURLWithSearchTerm(searchTerm);
    });
    $("#clear").click(function() {
        $(".results").empty();
    });
    function clearList() {
        $('.reults').empty();
     
    }
});