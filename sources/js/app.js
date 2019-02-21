const weater = new Weather('.weather', {
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
    langTempMax: `Température maximum`,
    langTempMin: `Température minimum`,
    langTo: `à`,
    langToday: `Aujourd'hui`,
    langWeather: `Météo`,
    langWind: `Vent`,
    langMonday: `Lundi`,
    langTuesday: `Mardi`,
    langWednesday: `Mercredi`,
    langThursday: `Jeudi`,
    langFriday: `Vendredi`,
    langSaturday: `Samedi`,
    langSunday: `Dimanche`,
});


const weater2 = new Weather('.weather-2', {
    weatherType: 'forecast',
    jsonPath: 'json/forecast.json',
    lang: 'en',
    units: 'imperial',
    forecastDays: 3,
});
