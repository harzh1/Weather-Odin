const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

const key = "5bc3480b3d8d4997b85112547240501";

app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=4`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

async function getWeather(city) {
  const response = await fetch(`/api/weather?city=${city}`, {
    mode: "cors",
  });
  const data = await response.json();
  console.log(data);

  return data;
}

module.exports = {
  getWeather,
};
