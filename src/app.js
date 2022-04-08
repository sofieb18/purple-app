function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  console.log(response.data);
}

let apiKey = "fa6ac0eec48a37d445f557c6867cf755";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Swindon&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
