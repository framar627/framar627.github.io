function getWindChill()
{
    var tempF = parseFloat(document.getElementById('tempF').innerHTML);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML);
    var windchill = document.getElementById('windchill');

    if (tempF > 50 || windSpeed < 3) {
        windchill.innerHTML = "N/A";
    }else{
        calculateWindchill(tempF,windSpeed);
    }
}

function calculateWindchill(tempF,windSpeed)
{
    var result = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * tempF * Math.pow(windSpeed,0.16));
    windchill.innerHTML = parseFloat(result.toFixed(2));
}