const weater = new Weather('.weather', {
    weatherType: 'weather',
    lang: 'fr',
    cityId: '3009566', // La Farlède, FR
    units: 'metric',
    appid: 'ca552343208237eb86235bba9288eb4a',
    //jsonPath: '../json/weather.json',
    icoPath: 'images/',
    icoFormat: 'svg',
    icoWidth: '60',
    icoHeight: '60',
});


const weater2 = new Weather('.weather-2', {
    weatherType: 'forecast',
    lang: 'fr',
    cityId: '712451', // Berdiansk, UA
    units: 'metric',
    //appid: 'ca552343208237eb86235bba9288eb4a',
    jsonPath: '../json/forecast.json',
    forecastDays: 3,
});
