 
// document.getElementById('btn').addEventListener('click', function () {
//     const apiKey = '4f19eded604b85c15fb54276a90c5f19'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const cityInput = document.getElementById("cityInput");
//     const btun = document.getElementById("btun");
//     const weatherInfo = document.getElementById("weather-info");

//     // Add a click event listener to the button
//     btun.addEventListener("click", function () {
//         // Get the city name from the input field
//         const city = cityInput.value;
//         if (city.trim() === "") {
//             // Check if the input is empty and provide an alert if it is
//             alert("Please enter a valid city name");
//             return;
//         }

//         // Create the API URL for the weather data
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     // Check if the response is not OK and throw an error if the city is not found
//                     throw new Error("City not found");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Extract weather information from the API response
//                 const weatherDescription = data.weather[0].description; // Weather description
//                 const mainTemperature = data.main.temp; // Main temperature
//                 const windSpeed = data.wind.speed; // Wind speed

//                 // Create HTML to display weather information
//                 const weatherHTML = `
//                     <p>Weather: ${weatherDescription}</p>
//                     <p>Main Temperature: ${mainTemperature} Kelvin</p>
//                     <p>Wind Speed: ${windSpeed} m/s</p>
//                 `;

//                 // Display the weather information in the designated element
//                 weatherInfo.innerHTML = weatherHTML;
//             });

//             .catch((error) => {
//                 if (error.message === "City not found") {
//                     alert("City does not exist. Please try again later.");
//                 } else {
//                     alert("An error occurred. Please try again later.");
//                 }
//             })
//             .then((response) => {
//                 if (!response.ok) {
//                     // Check if the response is not OK and throw an error if the city is not found
//                     throw new Error("City not found");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Extract weather information from the API response
//                 const weatherDescription = data.weather[0].description; // Weather description
//                 const mainTemperature = data.main.temp; // Main temperature
//                 const windSpeed = data.wind.speed; // Wind speed
//                 // Create HTML to display weather information
//                 const weatherHTML = `
//                     <p>Weather: ${weatherDescription}</p>
//                     <p>Main Temperature: ${mainTemperature} Kelvin</p>
//                     <p>Wind Speed: ${windSpeed} m/s</p>
//                 `;
//                 // Display the weather information in the designated element
//                 weatherInfo.innerHTML = weatherHTML;
//             })
//             .catch((error) => {
//                 // Handle errors
//                 if (error.message === "City not found") {
//                     // Check if the error message indicates a city not found
//                     alert("City does not exist. Please enter a valid city name.");
//                 } else {
//                     // Handle other errors
//                     alert("An error occurred. Please try again later.");
//                 }
//             });



// document.getElementById('btn').addEventListener('click', function () {
//     const apiKey = '4f19eded604b85c15fb54276a90c5f19'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const cityInput = document.getElementById('cityInput');
//     const button = document.getElementById('btn');
//     const weatherInfo = document.getElementById('weather-info');

//     // Add a click event listener to the button
//     btun.addEventListener("click", function () {
//         // Get the city name from the input field
//         const city = cityInput.value;
//         if (city.trim() === "") {
//             // Check if the input is empty and provide an alert if it is
//             alert("Please enter a valid city name");
//             return;
//         }

//         // Create the API URL for the weather data
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     // Check if the response is not OK and throw an error if the city is not found
//                     throw new Error("City not found");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Extract weather information from the API response
//                 const weatherDescription = data.weather[0].description; // Weather description
//                 const mainTemperature = data.main.temp; // Main temperature
//                 const windSpeed = data.wind.speed; // Wind speed

//                 // Create HTML to display weather information
//                 const weatherHTML = `
//                     <p>Weather: ${weatherDescription}</p>
//                     <p>Main Temperature: ${mainTemperature} Kelvin</p>
//                     <p>Wind Speed: ${windSpeed} m/s</p>
//                 `;

//                 // Display the weather information in the designated element
//                 weatherInfo.innerHTML = weatherHTML;
//             })
//             .catch((error) => {
//                 // Handle errors
//                 if (error.message === "City not found") {
//                     // Check if the error message indicates a city not found
//                     alert("City does not exist. Please enter a valid city name.");
//                 } else {
//                     // Handle other errors
//                     alert("An error occurred. Please try again later.");
//                 }
//             });
//     });
// });









// Step 1: Get your API key from OpenWeatherMap.
const apiKey = '4f19eded604b85c15fb54276a90c5f19';

// Step 2: Create variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('btn');
const weatherInfoDiv = document.getElementById('weather-info');

// Step 3: Add an event listener to the button to detect when it is clicked.
getWeatherBtn.addEventListener('click', () => {
  // Step 4: Inside the event listener, get the value of the input field (city name).
  const cityName = cityInput.value.trim();

  // Check if the city input is empty.
  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  // Step 5: Make an HTTP request to the OpenWeatherMap API.
  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey};

  fetch(apiUrl)
    .then(response => {
      // Step 6: Error handling - HTTP Status Code Error
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Step 7: Parse data and update the weather info div.
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const windSpeed = data.wind.speed;

      const weatherDetails = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature} K</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;

      weatherInfoDiv.innerHTML = weatherDetails;
    })
    .catch(error => {
      // Step 6: Error handling - API-Specific Error or Network Error
      alert(`Error: ${error.message}`);
    });
});