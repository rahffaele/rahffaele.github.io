/*$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd', 
	function(data) {
		console.log('data');
});*/

function fetchData() {
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.49271953641282&lon=9.299907172473253&appid=66ef0d49da67f2ff6856305249a75cdd&units=metric");
}

fetchData();