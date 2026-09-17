const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

fetch(currentWeather)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currentCondition').textContent = jsObject.weather[0].main;
    document.getElementById('currentTemperature').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('highTemperature').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('currentHumidity').textContent = jsObject.main.humidity.toFixed(0);
    document.getElementById('currentWindSpeed').textContent = jsObject.wind.speed.toFixed(0);

    var temp_windchill = jsObject.main.temp;
    var wind_speed_windchill = jsObject.wind.speed;
    
    var formula = 35.74 + (0.6215 * temp_windchill) - (35.75 * Math.pow(wind_speed_windchill, 0.16)) + (0.4275 * temp_windchill * Math.pow(wind_speed_windchill, 0.16));

    if(temp_windchill < 50 && wind_speed_windchill > 3) {
        document.getElementById("windchill").innerHTML = formula.toFixed(0) + "ºF";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }


  });

const forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

fetch(forecastWeather)
  .then((response) => response.json())
  .then((jsObjectF) => {

    var valid = -1;
    var imagesrc = "";
    var desc = "";

    var dateFormat = "";
    var dateF = "";
    var dayName = "";    

    for (let i = 0; i < jsObjectF.list.length; i++) {

      if (jsObjectF.list[i].dt_txt.includes('18:00:00')) {
        valid++;
        dateFormat = parseFloat(jsObjectF.list[i].dt);
        
        dateF = new Date(dateFormat * 1000);
        dayF = dateF.getDay();

        document.getElementById('temp' + valid).textContent = jsObjectF.list[i].main.temp.toFixed(0);
        imagesrc = 'https://openweathermap.org/img/w/' + jsObjectF.list[i].weather[0].icon + '.png';
        desc = 'https://openweathermap.org/img/w/' + jsObjectF.list[i].weather[0].description;
        document.getElementById('icon' + valid).setAttribute('src', imagesrc);
        document.getElementById('icon' + valid).setAttribute('alt', desc);

        switch (dayF) {
          case 0:
            dayName = "Sun";
            break;
          case 1:
            dayName = "Mon";
            break;
          case 2:
            dayName = "Tue";
            break;
          case 3:
            dayName = "Wed";
            break;
          case 4:
            dayName = "Thu";
            break;
          case 5:
            dayName = "Fri";
            break;
          case 6:
            dayName = "Sat";
            break;
        };

        document.getElementById('day' + valid).textContent = dayName;

      };
    }
    });