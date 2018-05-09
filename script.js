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
        $('.results').append('<p> It is Currently ' + weatherURL + ' Degrees Outside</p>');
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

     
                appendWeatherToBody(weather_url);
            },
            
        });
    }
 function showTime() {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
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
        $(".time").append(showTime);
       
    });
    $("#tech").click(function(){
        var techzip = 11201;
    
        callWeatherAPIWithSearchTerm(searchTerm);
    });
    $("#clear").click(function() {
        $(".results").empty();
        
    });
    });