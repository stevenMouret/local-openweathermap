const weather = new Weather('.weather', {});

const weather2 = new Weather('.weather-2', {
    //appid: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    //cityId: 2988507, // Paris, FR
    weatherType: 'forecast',
    jsonPath: 'json/forecast.json',
    lang: 'en',
    units: 'imperial',
    forecastDays: 3,
});
