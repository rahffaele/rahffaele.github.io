let isPlayingTwo = false;
let mainWeatherTwo;

async function updateWeatherIcon() {
    if (isPlayingTwo) {
        isPlayingTwo = false;
    } else {
        try {
            isPlayingTwo = true;

            const selectedCity = document.getElementById("citySelect").value;

            const apiKey = "49a5b64679cabaa392cc7fe6b5826a92";
            const city = selectedCity;

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            mainWeatherTwo = response.data.weather[0].main;

            const weatherIcon = document.getElementById("weather-icon");

            const iconBasePath = "../rahdio/assets/weather-icons/";
            let iconFileName;

            switch (mainWeatherTwo) {
                case "Clear":
                    iconFileName = "sun.svg";
                    console.log("Icon: sun.svg");
                    break;
                case "Clouds":
                    iconFileName = "cloudy.svg";
                    console.log("Icon: cloudy.svg");
                    break;
                case "Drizzle":
                    iconFileName = "cloud-drizzle.svg";
                    console.log("Icon: cloud-drizzle.svg");
                    break;
                case "Rain":
                    iconFileName = "cloud-rain.svg";
                    console.log("Icon: cloud-rain.svg");
                    break;
                case "Snow":
                    iconFileName = "snowflake.svg";
                    console.log("Icon: snowflake.svg");
                    break;
                case "Thunderstorm":
                case "Tornado":
                case "Squall":
                    iconFileName = "cloud-lightning.svg";
                    console.log("Icon: cloud-lightning.svg");
                    break;
                case "Mist":
                case "Haze":
                case "Fog":
                    iconFileName = "cloud-fog.svg";
                    console.log("Icon: cloud-fog.svg");
                    break;
                case "Smoke":
                case "Sand":
                case "Dust":
                case "Ash":
                    iconFileName = "dust.svg";
                    console.log("Icon: dust.svg");
                    break;
                default:
                    console.log("Invalid mainWeather selection for icon");
                    return;
            }

            weatherIcon.src = iconBasePath + iconFileName;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            // Handle the error in a user-friendly way
        }
    }
}
