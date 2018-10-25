const celsiusInput = document.getElementById('celsius');
const kelvinInput = document.getElementById('kelvin');
const fahrenheitInput = document.getElementById('fahrenheit');

const convertCelsius = () => {
  kelvinInput.value = (parseFloat(celsiusInput.value) + 273.15).toFixed(3);
  fahrenheitInput.value = (parseFloat(celsiusInput.value) * 9/5 + 32).toFixed(3);
}

const convertKelvin = () => {
  celsiusInput.value = (parseFloat(kelvinInput.value) - 273.15).toFixed(3);
  fahrenheitInput.value = (parseFloat(kelvinInput.value) * 9/5 -459.67).toFixed(3);
}

const convertFahrenheit = () => {
  celsiusInput.value = ((parseFloat(fahrenheitInput.value) - 32) * (5/9)).toFixed(3);
  kelvinInput.value = ((parseFloat(fahrenheitInput.value) + 459.67) * 5/9).toFixed(3);
}

celsiusInput.addEventListener('keyup', convertCelsius);
kelvinInput.addEventListener('keyup', convertKelvin);
fahrenheitInput.addEventListener('keyup', convertFahrenheit);