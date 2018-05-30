$(document).ready(function() {

 function weatherURLWithSearchTerm(searchTerm) {
        var apiKey = '1dbc470097a956c9c8ed70c45560e0d0';
        var zipcode = searchTerm;
        var countrycode="us";
        var url = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ',' + countrycode + "&units=imperial&APPID=1dbc470097a956c9c8ed70c45560e0d0";
        return url;
    }
    function appendWeatherToBody(weatherURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $('.results').html('<p> It is Currently ' + weatherURL + ' Degrees Outside</p>');
        $('.outside').html('<p>It is ' + outside_view + ' Outside</p>');
    }
    function callWeatherAPIWithSearchTerm(searchTerm) {
        var url = weatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                //console.log(response)
                var weather_url = response.list[0].main.temp;
                var outside_view = response.list[0].weather.main;
                appendWeatherToBody(weather_url);
                appendWeatherToBody(outside_view);
            },
            
        });
    }
 function showTime() {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();

      // Display a zero before hours/minutes if below 10
      if (hours < 10) {
        $('.time').html(minutes < 10 ? '0' + hours + ':0' + minutes : '0' + hours + ':' + minutes + " AM");
      } else {
        $('.time').html(minutes < 10 ? hours + ':0' + minutes : hours + ':' + minutes + " PM");
      }
    }
    $("#button").click(function() {
        var searchTerm = $('#input').val();
        clearList();
        callWeatherAPIWithSearchTerm(searchTerm);
        appendWeatherToBody(outside_view);
        $(".time").append(showTime);
    });
    $("#clear").click(function() {
        $(".results").empty();
        
    });
    function clearList() {
        $('.reults').empty();
       
    }
    });