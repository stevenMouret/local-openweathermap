'use strict';

var weater = new Weather('.weather', {
    weatherType: 'weather',
    jsonPath: 'json/weather.json',
    //appid: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    //cityId: 2643743, // Paris, FR
    lang: 'en',
    units: 'metric',
    icoPath: 'images/',
    icoFormat: 'svg',
    icoWidth: '60',
    icoHeight: '60',
    langTempMax: 'Temp\xE9rature maximum',
    langTempMin: 'Temp\xE9rature minimum',
    langTo: '\xE0',
    langToday: 'Aujourd\'hui',
    langWeather: 'M\xE9t\xE9o',
    langWind: 'Vent',
    langMonday: 'Lundi',
    langTuesday: 'Mardi',
    langWednesday: 'Mercredi',
    langThursday: 'Jeudi',
    langFriday: 'Vendredi',
    langSaturday: 'Samedi',
    langSunday: 'Dimanche'
});

var weater2 = new Weather('.weather-2', {
    weatherType: 'forecast',
    jsonPath: 'json/forecast.json',
    lang: 'en',
    units: 'imperial',
    forecastDays: 3
});