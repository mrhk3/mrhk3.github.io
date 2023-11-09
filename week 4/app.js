 
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
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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
            });

             .catch((error) => {
                if (error.message === "City not found") {
                    alert("City does not exist. Please try again later.");
                } else {
                    alert("An error occurred. Please try again later.");
                }
            })
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



// document.getElementById('btn').addEventListener('click', function () {
//     const apiKey = '4f19eded604b85c15fb54276a90c5f19'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const cityInput = document.getElementById('cityInput');
//     const button = document.getElementById('btn2');
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


// const cityInput = document. getElementById('cityInput');
// const button = document. getElementById('btn2');
// const Weatherinfo = document.getElementById('weather-info');
// button. addEventlistener('click', function(){
// const api = 'dea8acdd23e7995e921ab1c49957c170';
// const name = input.value;
// // alert user if button is clicked with no input
// if (!name){
// alert ("Please Enter a City name");
//  return;
// }
// // creating the httpRequest to access info from openweathermap
// var ourRequest = new XMLHttpReguest();
// ourRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5{api}');
// // Error messages printed for different cases
// ourRequest.onload = function() {
// if (ourRequest. status > 200 && ourRequest.status < 400) {
// var data = JSON.parse(ourRequest.responseText);
// if
// (data.cod == 200) {
// renderweather (data);
// }
// } else {
 
//     console.error ('HTTP Status Code Error:', ourRequest.status);
// }
// };
//     ourRequest.onreadystatechange = function() {
//     if (ourRequest.readystate == 4  && ourRequest.status == 200) {
//     const errorResponse = JSON.parse(ourRequest.responseText);
//     console.error ('API-Specific Error:", errorResponse.message);
//     3;
//     ourRequest.onerror =
//     function() f
//     console.error(Network Error");
//     our Request. send 0);
