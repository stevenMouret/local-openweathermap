class Weather {
    constructor(weatherSelector, {
        weatherType = 'forecast', // weather, forecast
        appid = false, // If call directly JSON API
        jsonPath = false, // If call local json file
        lang = 'en',
        cityId, // to found it, get in url after search by city https://openweathermap.org/
        units = 'metric', // metric, imperial
        icoPath = 'https://openweathermap.org/img/w/',
        icoFormat = 'png',
        icoWidth = 50,
        icoHeight = 50,
        forecastDays = 3, // Max 5
        langTempMax = `Maximum temperature`,
        langTempMin = `Minimum temperature`,
        langTo = `to`,
        langToday = `Today`,
        langWeather = `Weather`,
        langWind = `Wind`,
        langMonday = `Monday`,
        langTuesday = `Tuesday`,
        langWednesday = `Wednesday`,
        langThursday = `Thursday`,
        langFriday = `Friday`,
        langSaturday = `Saturday`,
        langSunday = `Sunday`,

    }) {
        this.weatherSelector = weatherSelector;
        this.weatherType = weatherType;
        this.appid = appid;
        this.jsonPath = jsonPath;
        this.lang = lang;
        this.cityId = cityId;
        this.units = units;
        this.icoPath = icoPath;
        this.icoFormat = icoFormat;
        this.icoWidth = icoWidth;
        this.icoHeight = icoHeight;
        this.forecastDays = forecastDays;
        this.langTempMax = langTempMax;
        this.langTempMin = langTempMin;
        this.langTo = langTo;
        this.langToday = langToday;
        this.langWeather = langWeather;
        this.langWind = langWind;
        this.langMonday = langMonday;
        this.langTuesday = langTuesday;
        this.langWednesday = langWednesday;
        this.langThursday = langThursday;
        this.langFriday = langFriday;
        this.langSaturday = langSaturday;
        this.langSunday = langSunday;

        // Check if the selector exists, if not, return an empty constructor
        if (!document.querySelector(weatherSelector)) return;
        if (!this.appid && !this.jsonPath) return;
        if (!this.cityId) return;
        // If fetch is not supported
        if(!self.fetch) return;

        if (this.jsonPath) {
            this.baseApiUrl = this.jsonPath;
        } else if (this.appid) {
            this.baseApiUrl = `https://api.openweathermap.org/data/2.5/${this.weatherType}?id=${cityId}&lang=${this.lang}&units=${this.units}&appid=${this.appid}`;
        }

        console.log(this.baseApiUrl);

        this.app = document.querySelector(this.weatherSelector);

        this.unitsAbbr = (this.units === 'metric') ? '°C' : '°F';

        this.getData();
    }

    getData() {
        fetch(this.baseApiUrl)
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                this.typeOfWeather(data);
            })
            .catch(function(error) {
                console.log('The JSON file could not be found. ');
                console.log(error);
            });
    }

    typeOfWeather(data) {
        if (this.weatherType === 'weather') {
            this.currentWeather(data);
        } else if (this.weatherType === 'forecast') {
            this.forecastWeather(data);
        }
    }

    currentWeather(data) {
        const name = data.name;
        const tempMax = data.main.temp_max;
        const tempMin = data.main.temp_min;
        const wind = data.wind.speed; // meter/sec
        const ico = data.weather[0].icon;
        const alt = data.weather[0].description;

        const template = `
            <article>
                <p class="weather__icon"><img src="${this.icoPath}${ico}.${this.icoFormat}" alt="${alt}" width="${this.icoWidth}" height="${this.icoHeight}"></p>
                <p class="weather__temp-max"><span class="ghost">${this.langTempMax}</span> ${tempMax}${this.unitsAbbr}</p>
                <p class="weather__temp-min"><span class="ghost">${this.langTempMin}</span> ${tempMin}${this.unitsAbbr}</p>
                <p class="weather__wind"><span class="ghost">${this.langWind}</span> ${this.convertMsToKmh(wind)} km/h</p>
            </article>
        `;

        this.app.innerHTML = `
            <div class="weather__wrapper">
                <h2 class="ghost">${this.langWeather} <span class="ghost">${this.langTo} ${name}</span></h2>
                <div class="weather__listitems">
                    ${template}
                </div>
            </div>
        `;
    }

    convertMsToKmh(value) {
        const kmh = parseFloat(value) * 3.6;
        return Math.ceil(kmh);
    }

    forecastWeather(data) {
        const name = data.city.name;
        const tempMax = Math.ceil(data.list[0].main.temp_max);
        const tempMin = Math.ceil(data.list[0].main.temp_min);
        const wind = data.list[0].wind.speed; // meter/sec
        const ico = data.list[0].weather[0].icon;
        const alt = data.list[0].weather[0].description;

        const dailyTpl = `
            <article class="weather__item">
                <h3 class="weather__title">${this.langToday}</h3>
                <p class="weather__icon"><img src="${this.icoPath}${ico}.${this.icoFormat}" alt="${alt}" width="${this.icoWidth}" height="${this.icoHeight}"></p>
                <p class="weather__temp-max"><span class="ghost">${this.langTempMax}</span> ${tempMax}${this.unitsAbbr}</p>
                <p class="weather__temp-min"><span class="ghost">${this.langTempMin}</span> ${tempMin}${this.unitsAbbr}</p>
                <p class="weather__wind"><span class="ghost">${this.langWind}</span> ${this.convertMsToKmh(wind)} km/h</p>
            </article>
        `;

        const forecast = [];
        const forecastTmp = [];
        const days = [this.langSunday, this.langMonday, this.langTuesday, this.langWednesday, this.langThursday, this.langFriday, this.langSaturday];
        const today = new Date();
        const todayDayName = days[today.getDay()];

        for (let i = 0; i < data.list.length; i++) {
            const timestamp = data.list[i].dt*1000;
            const date = new Date(timestamp);
            const dayName = days[date.getDay()];
            const hour = date.getHours();

            if (hour === 13 && dayName !== todayDayName) {
                const tempMax = Math.ceil(data.list[i].main.temp_max);
                const tempMin = Math.ceil(data.list[i].main.temp_min);
                let wind = data.list[i].wind.speed;
                let ico = data.list[i].weather[0].icon;
                let alt = data.list[i].weather[0].description;

                const dayTpl = `
                    <article class="weather__item">
                        <h3 class="weather__title">${dayName}</h3>
                        <p class="weather__icon"><img src="${this.icoPath}${ico}.${this.icoFormat}" alt="${alt}" width="${this.icoWidth}" height="${this.icoHeight}"></p>
                        <p class="weather__temp-max"><span class="ghost">${this.langTempMax}</span> ${tempMax}${this.unitsAbbr}</p>
                        <p class="weather__temp-min"><span class="ghost">${this.langTempMin}</span> ${tempMin}${this.unitsAbbr}</p>
                        <p class="weather__wind"><span class="ghost">${this.langWind}</span> ${this.convertMsToKmh(wind)} km/h</p>
                    </article>
                `;

                forecast.push(dayTpl);
            }
        }

        // Retrieves only the results you need.
        for (let i = 0; i < this.forecastDays; i++) {
            forecastTmp.push(forecast[i])
        }

        const forecastTpl = forecastTmp.join(' ');

        this.app.innerHTML = `
            <div class="weather__wrapper">
                <h2 class="ghost">${this.langWeather} <span class="ghost">${this.langTo} ${name}</span></h2>
                <div class="weather__listitems">
                    ${dailyTpl}
                    ${forecastTpl}
                </div>
            </div>
        `;
    }
}
