const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const description = document.getElementById('description');
const img = document.querySelector('img');
const wind = document.getElementById('wind');

const changeCity = document.getElementById('change-city');
const changeCountryCode = document.getElementById('change-country-code');
const changeLocationButton = document.getElementById('change-location-button');

async function getWeatherData(oras, tara) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${oras},${tara}&units=metric&appid=1d9eadfd959a277cf87d476b23a8cc86`);
  const responseData = await response.json();
  return responseData;
}

document.addEventListener('DOMContentLoaded', callWeatherData('Copenhagen', 'dk'));
changeLocationButton.addEventListener('click', buttonClicked);

function callWeatherData(oras, tara) {
  getWeatherData(oras, tara)
    .then(data => {
      city.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp} °C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      pressure.textContent = `Pressure: ${data.main.pressure} hpa`;
      visibility.textContent = `Visibility: ${Number(data.visibility) / 1000} km`;
      description.textContent = data.weather[0].description.charAt(0).toUpperCase() + (data.weather[0].description).slice(1);
      img.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      wind.textContent = `Wind: ${data.wind.speed} m/s`;
      console.log(data);
    })
    .catch(err => console.log(err));
}

function buttonClicked() {
  callWeatherData(changeCity.value, changeCountryCode.value);
  changeCity.value = '';
  changeCountryCode.value = '';
}
