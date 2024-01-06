Weather Forecast Site
This project is a web application that allows users to search for the weather forecast of any location and toggle between Fahrenheit and Celsius units1. The app uses the WeatherAPI to fetch the weather data and displays it in a user-friendly interface. The app also changes the look of the page based on the weather data, such as the background color and the images2. Optionally, the app can also use the Giphy API to show relevant weather-related gifs3.

Features
Search for any location by name or zip code
Toggle between Fahrenheit and Celsius units
Display the current weather and the 3-day forecast
Change the page appearance based on the weather data2
Optionally, show weather-related gifs using the Giphy API3
Technologies
HTML, CSS, and JavaScript
WeatherAPI and Giphy API
Promises or async/await for asynchronous operations
Installation and Usage
Clone this repo or download the zip file
Create a free account on WeatherAPI and get an API key
Create a .env file in the root directory and add your WeatherAPI key as WEATHER_API_KEY
Optionally, create a free account on Giphy and get an API key
Add your Giphy API key as GIPHY_API_KEY in the .env file
Run npm install to install the dependencies
Run npm start to launch the app on your local server
Open your browser and go to http://localhost:3000 to see the app in action
