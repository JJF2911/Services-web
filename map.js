if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiKey = "c9fb0a080f3de400d2797b4b274080b9";
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const icon = data.weather[0].icon;
        const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        const temp = Math.round(data.main.temp - 273.15);

        console.log('temperature : ',temp);
        console.log('url : ',imageURL);

        document.getElementById("imgURL").src = imageURL;
        document.getElementById("temp").innerHTML = `${temp}°C - ${weatherDescription}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById("temp").innerHTML = "Error: Could not fetch weather data"; // Display user-friendly message
      });
  });
} else {
  console.log('Geolocation is not supported by this browser.');
}