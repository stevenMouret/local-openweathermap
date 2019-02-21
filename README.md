# Local weather

**Javascript plugin to display weather on your website with OpenWeaterMap API.**

Script git specific JSON or directly the JSON API of OpenWeatherMap.

[Demo](https://stevenmouret.github.io/local-weather/dist/)

# Installation
1. Install Local Weater using: ```npm install -D local-weather```
2. Get an API-Key form [openweathermap](https://openweathermap.org/)

# Configuration
```javascript
const weater = new Weather('.weather', {
    weatherType: 'weather',
    lang: 'fr',
    cityId: '3009566',
    units: 'metric',
    appid: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    jsonPath: '../json/weather.json',
    icoPath: 'images/',
    icoFormat: 'svg',
    icoWidth: '60',
    icoHeight: '60',
});
```

# Options

- weatherType: string
  A string that define the type of weather, daily or forecast over a maximum of 5 days.
  value: weather, forecast
  default: forecast

- appid: string
  The OpenWeatherMap key
  
- jsonPath: string
  The path to a local json file
  
- lang: string
  OpenWeatherMap language option
  default: en
  
- cityId: integer
  The id of the city. Must be found directly in the url after à search on https://openweathermap.org

- units: string
  OpenWeatherMap units format of temperature. Fahrenheit = imperial, Celsius = metric, Kelvin = standard
  value: imperial, metric, standard
  default: metric

- icoPath: string
  Path to the image folder, by default use OpenWeatherMap images.
  default: https://openweathermap.org/img/w/
  
- icoFormat: string
  Format of the images
  default: png
  
- icoWidth: integer
  Width attribute of the images
  default: 50
  
- icoHeight: integer
  Height attribute of the image
  default: 50
  
- forecastDays: integer
  In the case where you choose weatherType to forecast, indicates the number of days to be displayed
  default: 3
