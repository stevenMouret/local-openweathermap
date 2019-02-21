'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weather = function () {
    function Weather(weatherSelector, _ref) {
        var _ref$weatherType = _ref.weatherType,
            weatherType = _ref$weatherType === undefined ? 'forecast' : _ref$weatherType,
            _ref$appid = _ref.appid,
            appid = _ref$appid === undefined ? false : _ref$appid,
            _ref$jsonPath = _ref.jsonPath,
            jsonPath = _ref$jsonPath === undefined ? false : _ref$jsonPath,
            _ref$lang = _ref.lang,
            lang = _ref$lang === undefined ? 'en' : _ref$lang,
            cityId = _ref.cityId,
            _ref$units = _ref.units,
            units = _ref$units === undefined ? 'metric' : _ref$units,
            _ref$icoPath = _ref.icoPath,
            icoPath = _ref$icoPath === undefined ? 'https://openweathermap.org/img/w/' : _ref$icoPath,
            _ref$icoFormat = _ref.icoFormat,
            icoFormat = _ref$icoFormat === undefined ? 'png' : _ref$icoFormat,
            _ref$icoWidth = _ref.icoWidth,
            icoWidth = _ref$icoWidth === undefined ? 50 : _ref$icoWidth,
            _ref$icoHeight = _ref.icoHeight,
            icoHeight = _ref$icoHeight === undefined ? 50 : _ref$icoHeight,
            _ref$forecastDays = _ref.forecastDays,
            forecastDays = _ref$forecastDays === undefined ? 3 : _ref$forecastDays,
            _ref$langTempMax = _ref.langTempMax,
            langTempMax = _ref$langTempMax === undefined ? 'Maximum temperature' : _ref$langTempMax,
            _ref$langTempMin = _ref.langTempMin,
            langTempMin = _ref$langTempMin === undefined ? 'Minimum temperature' : _ref$langTempMin,
            _ref$langTo = _ref.langTo,
            langTo = _ref$langTo === undefined ? 'to' : _ref$langTo,
            _ref$langToday = _ref.langToday,
            langToday = _ref$langToday === undefined ? 'Today' : _ref$langToday,
            _ref$langWeather = _ref.langWeather,
            langWeather = _ref$langWeather === undefined ? 'Weather' : _ref$langWeather,
            _ref$langWind = _ref.langWind,
            langWind = _ref$langWind === undefined ? 'Wind' : _ref$langWind,
            _ref$langMonday = _ref.langMonday,
            langMonday = _ref$langMonday === undefined ? 'Monday' : _ref$langMonday,
            _ref$langTuesday = _ref.langTuesday,
            langTuesday = _ref$langTuesday === undefined ? 'Tuesday' : _ref$langTuesday,
            _ref$langWednesday = _ref.langWednesday,
            langWednesday = _ref$langWednesday === undefined ? 'Wednesday' : _ref$langWednesday,
            _ref$langThursday = _ref.langThursday,
            langThursday = _ref$langThursday === undefined ? 'Thursday' : _ref$langThursday,
            _ref$langFriday = _ref.langFriday,
            langFriday = _ref$langFriday === undefined ? 'Friday' : _ref$langFriday,
            _ref$langSaturday = _ref.langSaturday,
            langSaturday = _ref$langSaturday === undefined ? 'Saturday' : _ref$langSaturday,
            _ref$langSunday = _ref.langSunday,
            langSunday = _ref$langSunday === undefined ? 'Sunday' : _ref$langSunday;

        _classCallCheck(this, Weather);

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
        if (!self.fetch) return;

        if (this.jsonPath) {
            this.baseApiUrl = this.jsonPath;
        } else if (this.appid) {
            this.baseApiUrl = 'https://api.openweathermap.org/data/2.5/' + this.weatherType + '?id=' + cityId + '&lang=' + this.lang + '&units=' + this.units + '&appid=' + this.appid;
        }

        console.log(this.baseApiUrl);

        this.app = document.querySelector(this.weatherSelector);

        this.unitsAbbr = this.units === 'metric' ? '°C' : '°F';

        this.getData();
    }

    _createClass(Weather, [{
        key: 'getData',
        value: function getData() {
            var _this = this;

            fetch(this.baseApiUrl).then(function (resp) {
                return resp.json();
            }) // Transform the data into json
            .then(function (data) {
                _this.typeOfWeather(data);
            }).catch(function (error) {
                console.log('The JSON file could not be found. ');
                console.log(error);
            });
        }
    }, {
        key: 'typeOfWeather',
        value: function typeOfWeather(data) {
            if (this.weatherType === 'weather') {
                this.currentWeather(data);
            } else if (this.weatherType === 'forecast') {
                this.forecastWeather(data);
            }
        }
    }, {
        key: 'currentWeather',
        value: function currentWeather(data) {
            var name = data.name;
            var tempMax = data.main.temp_max;
            var tempMin = data.main.temp_min;
            var wind = data.wind.speed; // meter/sec
            var ico = data.weather[0].icon;
            var alt = data.weather[0].description;

            var template = '\n            <article>\n                <p class="weather__icon"><img src="' + this.icoPath + ico + '.' + this.icoFormat + '" alt="' + alt + '" width="' + this.icoWidth + '" height="' + this.icoHeight + '"></p>\n                <p class="weather__temp-max"><span class="ghost">' + this.langTempMax + '</span> ' + tempMax + this.unitsAbbr + '</p>\n                <p class="weather__temp-min"><span class="ghost">' + this.langTempMin + '</span> ' + tempMin + this.unitsAbbr + '</p>\n                <p class="weather__wind"><span class="ghost">' + this.langWind + '</span> ' + this.convertMsToKmh(wind) + ' km/h</p>\n            </article>\n        ';

            this.app.innerHTML = '\n            <div class="weather__wrapper">\n                <h2 class="ghost">' + this.langWeather + ' <span class="ghost">' + this.langTo + ' ' + name + '</span></h2>\n                <div class="weather__listitems">\n                    ' + template + '\n                </div>\n            </div>\n        ';
        }
    }, {
        key: 'convertMsToKmh',
        value: function convertMsToKmh(value) {
            var kmh = parseFloat(value) * 3.6;
            return Math.ceil(kmh);
        }
    }, {
        key: 'forecastWeather',
        value: function forecastWeather(data) {
            var name = data.city.name;
            var tempMax = Math.ceil(data.list[0].main.temp_max);
            var tempMin = Math.ceil(data.list[0].main.temp_min);
            var wind = data.list[0].wind.speed; // meter/sec
            var ico = data.list[0].weather[0].icon;
            var alt = data.list[0].weather[0].description;

            var dailyTpl = '\n            <article class="weather__item">\n                <h3 class="weather__title">' + this.langToday + '</h3>\n                <p class="weather__icon"><img src="' + this.icoPath + ico + '.' + this.icoFormat + '" alt="' + alt + '" width="' + this.icoWidth + '" height="' + this.icoHeight + '"></p>\n                <p class="weather__temp-max"><span class="ghost">' + this.langTempMax + '</span> ' + tempMax + this.unitsAbbr + '</p>\n                <p class="weather__temp-min"><span class="ghost">' + this.langTempMin + '</span> ' + tempMin + this.unitsAbbr + '</p>\n                <p class="weather__wind"><span class="ghost">' + this.langWind + '</span> ' + this.convertMsToKmh(wind) + ' km/h</p>\n            </article>\n        ';

            var forecast = [];
            var forecastTmp = [];
            var days = [this.langSunday, this.langMonday, this.langTuesday, this.langWednesday, this.langThursday, this.langFriday, this.langSaturday];
            var today = new Date();
            var todayDayName = days[today.getDay()];

            for (var i = 0; i < data.list.length; i++) {
                var timestamp = data.list[i].dt * 1000;
                var date = new Date(timestamp);
                var dayName = days[date.getDay()];
                var hour = date.getHours();

                if (hour === 13 && dayName !== todayDayName) {
                    var _tempMax = Math.ceil(data.list[i].main.temp_max);
                    var _tempMin = Math.ceil(data.list[i].main.temp_min);
                    var _wind = data.list[i].wind.speed;
                    var _ico = data.list[i].weather[0].icon;
                    var _alt = data.list[i].weather[0].description;

                    var dayTpl = '\n                    <article class="weather__item">\n                        <h3 class="weather__title">' + dayName + '</h3>\n                        <p class="weather__icon"><img src="' + this.icoPath + _ico + '.' + this.icoFormat + '" alt="' + _alt + '" width="' + this.icoWidth + '" height="' + this.icoHeight + '"></p>\n                        <p class="weather__temp-max"><span class="ghost">' + this.langTempMax + '</span> ' + _tempMax + this.unitsAbbr + '</p>\n                        <p class="weather__temp-min"><span class="ghost">' + this.langTempMin + '</span> ' + _tempMin + this.unitsAbbr + '</p>\n                        <p class="weather__wind"><span class="ghost">' + this.langWind + '</span> ' + this.convertMsToKmh(_wind) + ' km/h</p>\n                    </article>\n                ';

                    forecast.push(dayTpl);
                }
            }

            // Retrieves only the results you need.
            for (var _i = 0; _i < this.forecastDays; _i++) {
                forecastTmp.push(forecast[_i]);
            }

            var forecastTpl = forecastTmp.join(' ');

            this.app.innerHTML = '\n            <div class="weather__wrapper">\n                <h2 class="ghost">' + this.langWeather + ' <span class="ghost">' + this.langTo + ' ' + name + '</span></h2>\n                <div class="weather__listitems">\n                    ' + dailyTpl + '\n                    ' + forecastTpl + '\n                </div>\n            </div>\n        ';
        }
    }]);

    return Weather;
}();