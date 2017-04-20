var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=aac005e52f81914c3d7eea70fe3955ef&units=metric';

//

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (resp) {
      if (resp.data.cod && resp.data.message) {
        throw new Error(resp.data.message);
      } else {
        return resp.data.main.temp;
      }
    }, function (resp) {
      throw new Error(resp.data.message);
    });
  }
}
