const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'ebb91f0ec2b9086c45fd0de4d81efa82';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () =>{

    const city = document.getElementById('cityInput').value;
    if(city){
       featchWeather(city);
    }else{
        alert('ciudad invalida');
    }

})

function featchWeather (city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';
    divResponseData.classList.add('container')

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const feels_like = data.main.feels_like;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `${Math.floor(temp - diffKelvin)}°C`

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent =`Humidity: ${humidity}%`

    const feels_likeInfo = document.createElement('p');
    feels_likeInfo.textContent = `Feels Like: ${Math.floor(feels_like - diffKelvin)}°C` 

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = description;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(feels_likeInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);


}