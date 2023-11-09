 
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
//         const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

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
document.getElementById('btn').addEventListener('click', function () {
    const apiKey = '4f19eded604b85c15fb54276a90c5f19'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const cityInput = document.getElementById("cityInput");
    const btun = document.getElementById("btun");
    const weatherInfo = document.getElementById("weather-info");

    // Add a click event listener to the button
    btun.addEventListener("click", function () {
        // Get the city name from the input field
        const city = cityInput.value;
        if (city.trim() === "") {
            // Check if the input is empty and provide an alert if it is
            alert("Please enter a valid city name");
            return;
        }

        // Create the API URL for the weather data
        const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey};

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    // Check if the response is not OK and throw an error if the city is not found
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then((data) => {
                // Extract weather information from the API response
                const weatherDescription = data.weather[0].description; // Weather description
                const mainTemperature = data.main.temp; // Main temperature
                const windSpeed = data.wind.speed; // Wind speed

                // Create HTML to display weather information
                const weatherHTML = `
                    <p>Weather: ${weatherDescription}</p>
                    <p>Main Temperature: ${mainTemperature} Kelvin</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;

                // Display the weather information in the designated element
                weatherInfo.innerHTML = weatherHTML;
            })
            .catch((error) => {
                // Handle errors
                if (error.message === "City not found") {
                    // Check if the error message indicates a city not found
                    alert("City does not exist. Please enter a valid city name.");
                } else {
                    // Handle other errors
                    alert("An error occurred. Please try again later.");
                }
            });
    });
});