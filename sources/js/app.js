const weater = new Weather('.weather', {
    weatherType: 'weather',
    appid: 'ca552343208237eb86235bba9288eb4a',
    //jsonPath: 'json/weather.json',
    cityId: 2988507, // Paris, FR
    lang: 'fr',
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
    appid: 'ca552343208237eb86235bba9288eb4a',
    jsonPath: 'json/forecast.json',
    cityId: 1850147, // Tokyo, JP
    lang: 'en',
    units: 'imperial',
    forecastDays: 3,
});
