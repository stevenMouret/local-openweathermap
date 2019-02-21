# Local weather

**Javascript plugin to display weather on your website with OpenWeaterMap API.**

Script git specific JSON or directly the JSON API of OpenWeatherMap.

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



