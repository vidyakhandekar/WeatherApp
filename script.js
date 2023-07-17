const inputBox =document.querySelector('.input-box');
const searchBtn =document.querySelector('#searchBtn');
const weather_img=document.querySelector('.weather-img');
const temp=document.querySelector('.temperature');
const desc=document.querySelector('.description');
const humidity=document.querySelector('#humidity');
const wind=document.querySelector('#wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "d537f14ee46f7f97e6cadc36a7dcd3b6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data = await fetch(`${url}`).then(response => response.json());
	console.log(data);

	if(data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
	location_not_found.style.display = "none";
	weather_body.style.display = "flex";
	 temp.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
	 desc.innerHTML=`${data.weather[0].description}`;
	 humidity.innerHTML = `${data.main.humidity}%`;
     wind.innerHTML = `${data.wind.speed}Km/H`;
	 switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            break;

    }
    }
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});



 