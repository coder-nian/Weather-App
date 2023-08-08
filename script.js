const getWeatherData = (city) => {
  let userCity = city
  const url = ''
  const options = ''

  return fetch(url, options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err))
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('city-name').innerText = weatherData.name
}
