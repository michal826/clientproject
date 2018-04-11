$(document).ready(function() {
    function weatherURLWithSearchTerm(searchTerm) {

        var url = "api.openweathermap.org/data/2.5/weather?q=" + searchTerm;
        return url;
    }

    function appendForecastToBody(srcURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $('.results').append('<img src=' + srcURL + '>');
       
    }

    function callLocationWithSearchTerm(searchTerm) {
        var url = weatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                //console.log(response)
                var weather = response.data[0].original.url;
                console.log(weather);
                appendFarecastToBody(weather);
            },
        });
    }

    //Add a click handler beloe to call the function when the button is clicked
    $("#button").click(function() {
        var searchTerm = $('#input').val();
        clearList();
        weatherURLWithSearchTerm(searchTerm);
    });
    $("#clear").click(function() {
        $(".results").empty();
    });
});