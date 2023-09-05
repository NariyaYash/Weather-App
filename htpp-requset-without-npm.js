const { error } = require("console");
const http = require("http");
const url = `http://api.weatherapi.com/v1/current.json?key=01bb632ef5b24ed59bb63755231708&q=Surat&aqi=no`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", () => {
  console.log("An Error: ", error);
});

request.end();
