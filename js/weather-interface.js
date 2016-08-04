var apiKey = require('./../.env').apiKey;

$(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val(" ");
    $('.showWeather').text("You picked this city: " + city + "!!!!");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The current wind speed in " + city + " is: " + response.wind.speed);
      console.log(response)

    });
  });
});
