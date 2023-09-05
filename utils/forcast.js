const request = require("request");

const forcast = (address, callBack) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=01bb632ef5b24ed59bb63755231708&q=${address}&aqi=no`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callBack("please Chacke your network conection", undefined);
    } else if (response.body.error) {
      callBack(response.body.error.message, undefined);
    } else {
      const data = response.body.current;
      callBack(undefined, data);
    }
  });
};

module.exports = forcast;
