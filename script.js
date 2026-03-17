async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "b47d969d51d93c22b7a23e4bf451ec58";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("result").innerHTML =
    `Temperature: ${data.main.temp}°C <br>
     Weather: ${data.weather[0].main}`;
}
