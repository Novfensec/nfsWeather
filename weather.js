let cityOutput = document.querySelector('[city]');
let tempOutput = document.querySelector('[temp]');
const weather_input = document.querySelector('[weather-input]');

weather_input.addEventListener('submit', function (e) {
	e.preventDefault();
	let location =document.querySelector('[gross-input]').value;
	updateWeather(location);
});

async function updateWeather(city) {
	cityOutput.innerHTML='<div class="spinner-border text-cg" role="status"></div>';;
	tempOutput.innerHTML='';
	let cityname = city;
	const options_weather = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0fafe3de48mshce9c7b8d2fa9c1ap194196jsn2e9237f5a2c8',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityname, options_weather)
		.then(response => response.json())
		.then((response) =>{
			tempOutput.innerHTML = response.temp+'&#8451;';
			cityOutput.innerHTML = cityname;}
			).catch (err => console.error(err));
}

updateWeather('Delhi');