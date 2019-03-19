# Local OpenWeatherMap

**Javascript plugin to display weather on your website with OpenWeaterMap API.**

You can specified JSON file or directly the JSON API of OpenWeatherMap.

[Demo](https://stevenmouret.github.io/local-openweathermap/dist/)

# Installation
1. Install Local Weater using: ```npm install local-openweathermap```
2. Get an API-Key form [openweathermap](https://openweathermap.org/)

# Configuration
```javascript
const weater = new Weather('.weather', {
    weatherType: 'weather',
    lang: 'fr',
    cityId: '3009566',
    units: 'metric',
    appid: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    icoPath: 'images/',
    icoFormat: 'svg',
    icoWidth: 60,
    icoHeight: 60,
});
```

Options can be also call with data attributes.

```html
<div class="weather" data-json-path="json/weather.json" data-ico-path="images/" data-units="metric" data-weather-type="weather" data-ico-format="svg" data-ico-width="30" data-ico-height="30"></div>
```

# Options

- weatherType: string<br>
  A string that define the type of weather, daily or forecast over a maximum of 5 days.<br>
  value: weather, forecast<br>
  default: forecast

- forecastDays: integer<br>
  In the case where you choose weatherType to forecast, indicates the number of days to be displayed<br>
  default: 3<br>
  Max: 4

- appid: string<br>
  The OpenWeatherMap key
  
- jsonPath: string<br>
  The path to a local json file
  
- lang: string<br>
  OpenWeatherMap language option<br>
  default: en
  
- cityId: integer<br>
  The id of the city. Must be found directly in the url after à search on https://openweathermap.org

- units: string<br>
  OpenWeatherMap units format of temperature. Fahrenheit = imperial, Celsius = metric, Kelvin = standard<br>
  value: imperial, metric, standard<br>
  default: metric

- icoPath: string<br>
  Path to the image folder, by default use OpenWeatherMap images.<br>
  default: https://openweathermap.org/img/w/
  
- icoFormat: string<br>
  Format of the images<br>
  default: png
  
- icoWidth: integer<br>
  Width attribute of the images<br>
  default: 50
  
- icoHeight: integer<br>
  Height attribute of the image<br>
  default: 50
