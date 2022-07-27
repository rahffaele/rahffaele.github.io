/*$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd', 
	function(data) {
		console.log('data');
});*/

function fetchData() {
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd&units=metric").then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
	});
}

fetchData();

if (object.wind.speed > 5) {
	document.getElementsByClassName("title").style.color = "blue";
}
else {
	document.getElementsByClassName("title").style.color = "red";
}
