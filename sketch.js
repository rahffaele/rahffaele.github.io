/*$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd', 
	function(data) {
		console.log('data');
});*/

function fetchData() {
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd&units=metric").then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data.wind);
		const wind_speed = data.wind.speed;
		if (wind_speed > 5) {
			document.getElementsByClassName("title").style.color = "#39D391";
		}
		else {
			document.getElementsByClassName("title").style.color = "#707070";
		}
	});
}

fetchData();


