let isPlaying = false;

//music variables
let loopOne, loopTwo, loopThree, loopFour, loopHighMelody;
let synthOne, synthTwo, synthThree, synthFour, highMelody;
//background color variables
let tempColor, pollColor;
let tempColorDefault, pollColorDefault;
//weather variables
var mainWeather;

let clearBass = ["C2", "C2", "F2", "G2"];
let clearMidOne = ["E3", "E3", "A3", "B3"];
let clearMidTwo = ["G3", "G3", "C4", "D4"];
let clearMidThree = ["B3", "B3", "E4", "G3"];
//let clearMid = [clearMidOne, clearMidTwo, clearMidThree];
let clearTreble = ['C5', 'D5', 'E5', 'G5', 'A5', 'C6'];


let cloudBass = ["A2", "G2", "C2", "F2"];
let cloudMidOne = ["C3", "E3", "G3"];
let cloudMidTwo = ["Bb3", "D3", "F3"];
let cloudMidThree = ["E3", "G3", "G3"];
let cloudMidFour = ["A3", "C4", "E4"];
let cloudMid = [cloudMidOne, cloudMidTwo, cloudMidThree, cloudMidFour];
let cloudTreble = ['A3', 'C4', 'D4', 'E4', 'G4', 'A4'];

let rainBass = ["D2", "G2", "D3", "A2"];
let rainMidOne = ["F3", "A3"];
let rainMidTwo = ["Bb3", "D3"];
let rainMidThree = ["A3", "F3"];
let rainMidFour = ["C#3", "E4", "G4"];
let rainMid = [cloudMidOne, cloudMidTwo, cloudMidThree, cloudMidFour];
let rainTreble = ['D4', 'F4', 'G4', 'A4', 'C#5', 'D5'];

let noteBass;
let noteMidOne;
let noteMidTwo;
let noteMidThree;
let noteTreble;

let filterClear;
let filterClouds;
let filterRain;

const rainTrack = document.getElementById("rain-track");
const birdsTrack = document.getElementById("birds-track");
const trafficTrack = document.getElementById("traffic-track");
const thunderTrack = document.getElementById("thunder-track");

const birdsTrackAudio = document.getElementById("birds-track-file");

async function callApi(){
	const apiKeyWeather = "49a5b64679cabaa392cc7fe6b5826a92";
    const responseWeahter = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Milan&appid=${apiKeyWeather}&units=metric`
    );
    const temp = responseWeahter.data.main.temp;
    tempColorDefault = calculateTempColor(temp);

    const humidity = responseWeahter.data.main.humidity;

    const descriptionWeather = responseWeahter.data.weather[0].description;
    console.log("weather description:", descriptionWeather);
    const windSpeed = responseWeahter.data.wind.speed;

    const apiKeyAir = "566bead0-8093-4d5f-91f6-cb17d494ce1c";
    const responsePoll = await axios.get(
        `https://api.airvisual.com/v2/city?city=Milano&state=Lombardy&country=Italy&key=${apiKeyAir}`
    );

    const usaqi = responsePoll.data.data.current.pollution.aqius;
    pollColorDefault = calculatePollColor(usaqi);

    const background = document.getElementById("bg");
	background.style.background = `linear-gradient(to bottom, ${tempColorDefault}, ${pollColorDefault})`;

	var temperatureParagraph = document.getElementById('tempText');
	temperatureParagraph.textContent = 'Temperature: ' + temp + "°C";

	//var weatherDescription = document.getElementById('weatherDescription');
	//weatherDescription.textContent = descriptionWeather;

    var humidityDescription = document.getElementById('humidity');
    humidityDescription.textContent = "Humidity: " + humidity+"g.m-3";

	var windText = document.getElementById('windText');
	windText.textContent = "Wind speed: " + windSpeed + "m/s";

	var songTitle = document.getElementById('songTitle');
	songTitle.textContent = descriptionWeather + " in Milan";

	var airWidgetValue = document.getElementById('airQualText');
	airWidgetValue.textContent = usaqi;

	var colorAirWidget;
	var pollDescription;
	if (usaqi<50) {
		colorAirWidget = "#25D08F";
		pollDescription = "Air quality is good";
	} else if (usaqi<100) {
		colorAirWidget = "#D0BF25";
		pollDescription = "Air quality is acceptable";
	} else if (usaqi<150) {
		colorAirWidget = "#ED7531";
		pollDescription = "Sensitive groups may experience health effects";
	} else if (usaqi<200) {
		colorAirWidget = "#ED3131";
		pollDescription = "General public may experience health effects";
	} else if (usaqi<300) {
		colorAirWidget = "#9E57F9";
		pollDescription = "Health alert for everyone";
	} else {
		colorAirWidget = "#000000";
		pollDescription = "Emergency conditions for everyone's health";
	}

	var airWidget = document.getElementById('air-widget');
	airWidget.style.backgroundColor = colorAirWidget;

	var airWidgetDescription = document.getElementById('airWidgetDescription');
	airWidgetDescription.textContent = pollDescription;

}callApi()

window.addEventListener("load", (event) => {
  getTime();
});

function getTime() {
  const citySelect = document.getElementById("citySelect");
  const selectedCity = citySelect.value;

  const cityTimezones = {
    Milan: "Europe/Rome",
    "New York": "America/New_York",
    Paris: "Europe/Paris",
    Rome: "Europe/Rome",
    London: "Europe/London",
    Berlin: "Europe/Berlin",
    "São Paulo": "America/Sao_Paulo",
    Palermo: "Europe/Rome"
  };
  
  const timezone = cityTimezones[selectedCity];  
  const currentTime = new Date();

  const options = { timeZone: timezone, weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', hour12: false, minute: 'numeric' };
  const formattedDateTime = currentTime.toLocaleString("en-US", options);
  
  const dateTimeSpan = document.getElementById("dateTimeSpan");
  dateTimeSpan.textContent = formattedDateTime;

  console.log(formattedDateTime); // Check the value of formattedDateTime
  console.log(selectedCity); // Check the value of selectedCity
  console.log(timezone); // Check the value of timezone
  let hourValue = extractHourValue(formattedDateTime);

  const nightOpacity = nightFilter();

  function extractHourValue(dateTimeString) {
    const hourRegex = /(\d+):/;
    const matches = hourRegex.exec(dateTimeString);
    if (matches && matches.length > 1) {
      return parseInt(matches[1]);
    }
    throw new Error('Failed to extract hour value from formattedDateTime');
  }

  function nightFilter() {
    console.log("hour value:", hourValue);
    let nightOpacityValue;
    if (hourValue >= 12 && hourValue <= 18) {
      nightOpacityValue = 1 + (hourValue - 12) * (19 / 6);
    } else if (hourValue >= 19 && hourValue <= 24) {
      nightOpacityValue = 20 + (hourValue - 19) * (50 / 5);
    } else if (hourValue >= 1 && hourValue <= 6) {
      nightOpacityValue = 70 - (hourValue - 1) * (50 / 5);
    } else if (hourValue >= 7 && hourValue <= 11) {
      nightOpacityValue = 20 - (hourValue - 7) * (19 / 4);
    }
    console.log("nightOpacityValue:", nightOpacityValue);
    return Math.round(nightOpacityValue); // Optional: Round the value to the nearest whole number
  }

  const nightFilterElement = document.getElementById("night-filter");
  nightFilterElement.style.opacity = nightOpacity + "%"; 
}


async function musicStart() {

    if (isPlaying) {
        // Stop the music if it's already playing
        Tone.Transport.stop();
        Tone.Transport.cancel();
        bassLoop.stop();
        midLoopOne.stop();
        midLoopTwo.stop();
        //midLoopThree.stop();
        trebleLoop.stop();
        bassLoop.dispose();
        midLoopOne.dispose();
        midLoopTwo.stop();
        //midLoopThree.stop();
        trebleLoop.dispose();

        isPlaying = false;
        const playerIcon = document.getElementById("player-icon");
        playerIcon.src = "../rahdio/assets/music-icons/play.svg"
        playerIcon.style.padding = "8px 4px 8px 8px"
    } else {
        const playerIcon = document.getElementById("player-icon");
        playerIcon.src = "../rahdio/assets/music-icons/pause.svg"
        playerIcon.style.padding = "8px 6px 8px 6px"
        isPlaying = true;
        getTime();

        try {
            const citySelect = document.getElementById("citySelect");
            const selectedCity = citySelect.value;

            const apiKey = "49a5b64679cabaa392cc7fe6b5826a92";
            const city = selectedCity;

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            console.log(response.data); // Control

            const { temp, humidity } = response.data.main;
            mainWeather = response.data.weather[0].main;
            const descriptionWeather = response.data.weather[0].description;
            const sunrise = response.data.sys.sunrise;
            const sunset = response.data.sys.sunset;
            const windSpeed = response.data.wind.speed;

            tempColor = calculateTempColor(temp);
            console.log("color temp:", tempColor);

            console.log("Wind Speed:", windSpeed);
            console.log("temp", temp);
            console.log("humidity", humidity);
            console.log("weather:", mainWeather);
            console.log("weather description:", descriptionWeather);
            console.log("sunrise:", sunrise);
            console.log("sunset:", sunset);

            updateUiWeather(temp, city, humidity, windSpeed, descriptionWeather);
            weatherNote(mainWeather);

            const weatherIcon = document.getElementById("weather-icon");

            const iconBasePath = "../rahdio/assets/weather-icons/";
            let iconFileName;

            switch (mainWeather) {
                case "Clear":
                    iconFileName = "sun.svg";
                    console.log("Icon: sun.svg");

                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("disabled-button");
                    birdsTrack.classList.add("general-button");

                    let isPlaying = false;
                    birdsTrack.addEventListener("click", function() {    
                          if (isPlaying) {
                            birdsTrackAudio.pause();
                            
                          } else {
                            birdsTrackAudio.play();
                            
                          }
                          
                          isPlaying = !isPlaying;
                    alert("Button was clicked!");
                    });
                    break;
                case "Clouds":
                    iconFileName = "cloudy.svg";
                    console.log("Icon: cloudy.svg");

                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Drizzle":
                    iconFileName = "cloud-drizzle.svg";
                    console.log("Icon: cloud-drizzle.svg");

                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    rainTrack.classList.remove("disabled-button");
                    rainTrack.classList.add("general-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Rain":
                    iconFileName = "cloud-rain.svg";
                    console.log("Icon: cloud-rain.svg");

                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    rainTrack.classList.remove("disabled-button");
                    rainTrack.classList.add("general-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Snow":
                    iconFileName = "snowflake.svg";
                    console.log("Icon: snowflake.svg");

                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Thunderstorm":
                case "Tornado":
                case "Squall":
                    iconFileName = "cloud-lightning.svg";
                    console.log("Icon: cloud-lightning.svg");
                    thunderTrack.classList.remove("disabled-button");
                    thunderTrack.classList.add("general-button");
                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Mist":
                case "Haze":
                case "Fog":
                    iconFileName = "cloud-fog.svg";
                    console.log("Icon: cloud-fog.svg");

                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                case "Smoke":
                case "Sand":
                case "Dust":
                case "Ash":
                    iconFileName = "dust.svg";
                    console.log("Icon: dust.svg");

                    thunderTrack.classList.remove("general-button");
                    thunderTrack.classList.add("disabled-button");
                    rainTrack.classList.remove("general-button");
                    rainTrack.classList.add("disabled-button");
                    birdsTrack.classList.remove("general-button");
                    birdsTrack.classList.add("disabled-button");
                    break;
                default:
                    console.log("Invalid mainWeather selection for icon");
                    return;
            }

            weatherIcon.src = iconBasePath + iconFileName;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }

        try {
            const citySelect = document.getElementById("citySelect");
            const selectedCity = citySelect.value;

            let cityName, cityState, cityCountry;

            switch (selectedCity) {
                case "Milan":
                    cityName = "Milano";
                    cityState = "Lombardy";
                    cityCountry = "Italy";
                    break;
                case "New York":
                    cityName = "New York City";
                    cityState = "New York";
                    cityCountry = "USA";
                    break;
                case "Paris":
                    cityName = "Paris";
                    cityState = "Ile-de-France";
                    cityCountry = "France";
                    break;
                case "Rome":
                    cityName = "Rome";
                    cityState = "Latium";
                    cityCountry = "Italy";
                    break;
                case "London":
                    cityName = "London";
                    cityState = "England";
                    cityCountry = "UK";
                    break;
                case "Berlin":
                    cityName = "Berlin";
                    cityState = "Berlin";
                    cityCountry = "Germany";
                    break;
                case "São Paulo":
                    cityName = "Sao Paulo";
                    cityState = "Sao Paulo";
                    cityCountry = "Brazil";
                    break;
                case "Palermo":
                    cityName = "Marinella";
                    cityState = "Sicily";
                    cityCountry = "Italy";
                    break;
                default:
                    console.log("Invalid city selection");
                    return;
            }

            const apiKeyAir = "566bead0-8093-4d5f-91f6-cb17d494ce1c";
            const city = selectedCity;

            const response = await axios.get(
                `https://api.airvisual.com/v2/city?city=${cityName}&state=${cityState}&country=${cityCountry}&key=${apiKeyAir}`
                //`http://api.airvisual.com/v2/cities?state=${cityState}&country=${cityCountry}&key=${apiKeyAir}`,
                //`http://api.airvisual.com/v2/states?country=${cityCountry}&key=${apiKeyAir}`,
            );

            const usaqi = response.data.data.current.pollution.aqius;
            pollColor = calculatePollColor(usaqi);

            console.log("Poll color:", pollColor);
            console.log(response.data);
            console.log("Aqi US:", usaqi);

            updateUiPollution(usaqi);
        } catch (error) {
            console.error("Error fetching air pollution data:", error);
        }

        try {
            const citySelect = document.getElementById("citySelect");
            const selectedCity = citySelect.value;

            let cityLat, cityLon;

            // Assign the correct coordinates based on the selected city
            switch (selectedCity) {
                case "Milan":
                    cityLat = 45.4776;
                    cityLon = 9.2088;
                    break;
                case "New York":
                    cityLat = 40.7549;
                    cityLon = -73.984;
                    break;
                case "Paris":
                    cityLat = 48.8566;
                    cityLon = 2.3522;
                    break;
                case "Rome":
                    cityLat = 41.9028;
                    cityLon = 12.4964;
                    break;
                case "London":
                    cityLat = 51.5074;
                    cityLon = -0.1278;
                    break;
                case "Berlin":
                    cityLat = 52.52;
                    cityLon = 13.405;
                    break;
                case "São Paulo":
                    cityLat = -23.5505;
                    cityLon = -46.6333;
                    break;
                case "Palermo":
                    cityLat = 38.1157;
                    cityLon = 13.3613;
                    break;
                default:
                    console.log("Invalid city selection");
                    return;
            }

            const apiKeyTomTom = "kkAyqHVBG9Haepu1D3JZBnXmy016m8QP";
            const responseTomTom = await axios.get(
                `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/xml?key=${apiKeyTomTom}&point=${cityLat},${cityLon}`
            );

            const xmlString = responseTomTom.data;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            const currentSpeed = xmlDoc.querySelector("currentSpeed")
                .textContent;
            const currentTravelTime = xmlDoc.querySelector("currentTravelTime")
                .textContent;

            // Output the extracted values
            console.log("City:", selectedCity);
            console.log("Latitude:", cityLat);
            console.log("Longitude:", cityLon);
            console.log("Current Speed:", currentSpeed);
            console.log("Current Travel Time:", currentTravelTime);
        } catch (error) {
            console.error("Error fetching traffic data:", error);
    }
        
    function makeSynthOne() {
            let envelope = {
                attack: 0.4,
                release: 0.5,
                decay: 0.5,
                releaseCurve: "linear",
            };
            let filterEnvelope = {
                baseFrequency: 300,
                octaves: 1,
                attack: 2,
                decay: 3,
                release: 1000,
            };
            let filterEnvelope1 = {
                baseFrequency: 500,
                octaves: -1,
                attack: 1,
                decay: 4,
                release: 5,
            };
            let filterEnvelope2 = {
                baseFrequency: 300,
                octaves: 3,
                attack: 1,
                decay: 4,
                release: 5,
            };

            return new Tone.DuoSynth({
                harmonicity: 2,
                volume: -35,
                voice0: {
                    oscillator: { type: "triangle" },
                    envelope,
                    filterEnvelope,
                    filterEnvelope2,
                },
                voice1: {
                    oscillator: { type: "sine" },
                    envelope,
                    filterEnvelope1,
                    filterEnvelope,
                },
                vibratoRate: 0.3,
                vibratoAmount: 0.1,
            });
        }

        function makeSynthTwo() {
            let envelope = {
                attack: 0.5,
                release: 2,
                decay: 4,
                releaseCurve: "linear",
            };
            let filterEnvelope = {
                baseFrequency: 200,
                octaves: -2,
                attack: 2,
                decay: 3,
                chorus: 5,
                release: 1000,
            };
            let filterEnvelope1 = {
                baseFrequency: 500,
                octaves: -1,
                attack: 1,
                decay: 4,
                release: 5,
            };
            let filterEnvelope2 = {
                baseFrequency: 300,
                octaves: 3,
                attack: 1,
                decay: 4,
                release: 5,
            };

            return new Tone.DuoSynth({
                harmonicity: 4,
                volume: -25,
                voice0: {
                    oscillator: { type: "sine" },
                    envelope,
                    filterEnvelope,
                },
                voice1: {
                    oscillator: { type: "sine" },
                    envelope,
                    filterEnvelope,
                },
                vibratoRate: 0.4,
                vibratoAmount: 0.1,
            });
        }

        function weatherNote(mainWeather) {
           switch (mainWeather) {
                case "Clear":
                    noteBass = clearBass;
                    noteMidOne = clearMidOne;
                    noteMidTwo = clearMidTwo;
                    noteMidThree = clearMidThree;
                    //noteMid = clearMid;
                    noteTreble = clearTreble;
                    break;
                case "Clouds":
                case "Drizzle":
                    noteBass = cloudBass;
                    noteMidOne = cloudMidOne;
                    noteMidTwo = cloudMidTwo;
                    noteMidThree = cloudMidThree;
                    noteTreble = cloudTreble;
                    break;
                case "Rain":
                    noteBass = rainBass;
                    noteMidOne = rainMidOne;
                    noteMidTwo = rainMidTwo;
                    noteMidThree = rainMidThree;
                    noteTreble = rainTreble;
                    break;
                case "Snow":
                    noteBass = snowBass;
                    noteMidOne = snowMidOne;
                    noteMidTwo = snowMidTwo;
                    noteMidThree = snowMidThree;
                    noteTreble = snowTreble;
                    break;
                case "Thunderstorm":
                case "Tornado":
                case "Squall":
                    noteBass = stormBass;
                    noteMid = stormMid;
                    noteTreble = stormTreble;
                    break;
                case "Mist":
                case "Haze":
                case "Fog":    
                    noteBass = stormBass;
                    noteMid = stormMid;
                    noteTreble = stormTreble;
                    break;
                case "Smoke":
                case "Sand":
                case "Dust":
                case "Ash":
                    noteBass = stormBass;
                    noteMid = stormMid;
                    noteTreble = stormTreble;
                    break;
                default:
                    console.log("Invalid mainWeather selection");
                    return;
            }
        }

        console.log(noteBass);
        console.log(noteMidOne);
        console.log(noteMidTwo);
        console.log(noteMidThree);
        console.log(noteTreble);

        bass = makeSynthTwo();
        midOne = makeSynthTwo();
        midTwo = makeSynthTwo();
        midThree = makeSynthTwo();
        treble = makeSynthOne();

        const trebleSlider = document.getElementById('trebleSlider');
        const trebleVolume = treble.volume; // Get the Tone.Volume object associated with the synth's volume

        // Add an event listener to the treble slider
        trebleSlider.addEventListener('input', function () {
            const trebleVolumeValue = parseFloat(this.value);
            trebleVolume.value = trebleVolumeValue;
        });

        const harmonySlider = document.getElementById('harmonySlider');
        const harmonyOneVolume = midOne.volume; // Get the Tone.Volume object associated with the synth's volume
        const harmonyTwoVolume = midTwo.volume;

        // Add an event listener to the treble slider
        harmonySlider.addEventListener('input', function () {
            const harmonyVolumeValue = parseFloat(this.value);
            harmonyOneVolume.value = harmonyVolumeValue;
            harmonyTwoVolume.value = harmonyVolumeValue;
        });

        const bassSlider = document.getElementById('bassSlider');
        const bassVolume = bass.volume; // Get the Tone.Volume object associated with the synth's volume

        // Add an event listener to the treble slider
        bassSlider.addEventListener('input', function () {
            const bassVolumeValue = parseFloat(this.value);
            bassVolume.value = bassVolumeValue;
        });

        let leftPanner = new Tone.Panner(-0.5); // No longer connected to master!
        let rightPanner = new Tone.Panner(0.5); // No longer connected to master!
        let echo = new Tone.FeedbackDelay("8n", 0.2);
        let delay = new Tone.Delay(1.0);
        let delayFade = new Tone.Gain(0.5);


        const delayEffectInput = document.getElementById("delayEffect");

        // Add an event listener to the input element
        delayEffectInput.addEventListener("input", function() {
        // Update the delayTime value based on the input value
        delay.delayTime.value = parseFloat(delayEffectInput.value);
        });
        delayFade.gain.value = 0.75;

        //bass.connect(leftPanner);
        //mid.connect(rightPanner);

        

        bass.connect(echo);
        midOne.connect(echo);
        midTwo.connect(echo);
        midThree.connect(echo);

        treble.connect(echo);

        //leftPanner.connect(echo);
        //rightPanner.connect(echo);

        echo.toMaster();
        echo.connect(delay);
        delay.connect(Tone.context.destination);
        delay.connect(delayFade);
        delayFade.connect(delay);

        //bass.toMaster();
        //midOne.toMaster();
        //midTwo.toMaster();
        //midThree.toMaster();
        //treble.toMaster();

       

        const noteDuration = "6m";
         // Adjust this value as needed
        const timeInterval = "8m";
        let index = 0;

        bassLoop = new Tone.Loop((time) => {
        index = (index + 1) % noteBass.length;
        bass.triggerAttackRelease(noteBass[index], noteDuration, time);
        
        bassLoop.interval = timeInterval;
        }, noteDuration).start();

        midLoopOne = new Tone.Loop((time) => {
        index = (index + 1) % noteMidOne.length;
        midOne.triggerAttackRelease(noteMidOne[index], "1m", time);
        
        midLoopOne.interval = "1m";
        }, "3m").start();

        midLoopTwo = new Tone.Loop((time) => {
        index = (index + 1) % noteMidTwo.length;
        midTwo.triggerAttackRelease(noteMidTwo[index], "2m", time);
        
        midLoopTwo.interval = "2m";
        }, "12m").start();

        /*midLoopThree = new Tone.Loop((time) => {
        index = (index + 1) % noteMidThree.length;
        midThree.triggerAttackRelease(noteMidThree[index], "6m", time);
        
        midLoopThree.interval = "7m";
        }, "20m").start();*/

        

        trebleLoop = new Tone.Loop((time) => {
            var randomIndex = Math.floor(Math.random() * noteTreble.length);
            var note = noteTreble[randomIndex];
            treble.triggerAttackRelease(note, "1m", "+0");
            console.log("treble note:", note);
        }, "4m").start();


        Tone.Transport.start();
        isPlaying = true;
    }

    const background = document.getElementById("bg");
  	background.style.background = `linear-gradient(to bottom, ${tempColor}, ${pollColor})`;

  	function updateUiWeather(temp, city, humidity, windSpeed, descriptionWeather){
  		var temperatureParagraph = document.getElementById('tempText');
		temperatureParagraph.textContent = 'Temperature: ' + temp + "°C";

		var cityTitle = document.getElementById('cityTitle');
		cityTitle.textContent = city;

		var humidityDescription = document.getElementById('humidity');
		humidityDescription.textContent = "Humidity: " + humidity+"g.m-3";

		var windText = document.getElementById('windText');
		windText.textContent = "Wind speed: " + windSpeed + "m/s";

		var songTitle = document.getElementById('songTitle');
		songTitle.textContent = descriptionWeather + " in " +  city;
	}

	function updateUiPollution(usaqi){
		var colorAirWidget;
		var pollDescription;
		if (usaqi<50) {
			colorAirWidget = "#25D08F";
			pollDescription = "Air quality is good";
		} else if (usaqi<100) {
			colorAirWidget = "#D0BF25";
			pollDescription = "Air quality is acceptable";
		} else if (usaqi<150) {
			colorAirWidget = "#ED7531";
			pollDescription = "Sensitive groups may experience health effects";
		} else if (usaqi<200) {
			colorAirWidget = "#ED3131";
			pollDescription = "General public may experience health effects";
		} else if (usaqi<300) {
			colorAirWidget = "#9E57F9";
			pollDescription = "Health alert for everyone";
		} else {
			colorAirWidget = "#000000";
			pollDescription = "Emergency conditions for everyone's health";
		}

		var airWidget= document.getElementById('air-widget');
		airWidget.style.backgroundColor = colorAirWidget;
		var airWidgetValue = document.getElementById('airQualText');
		airWidgetValue.textContent = usaqi;
		var airWidgetDescription = document.getElementById('airWidgetDescription');
		airWidgetDescription.textContent = pollDescription;
  	}
}


function calculateTempColor(temp) {
    const tempColorStart = [83, 97, 125]; // RGB color for temp value 0 or less
    const tempColorEnd = [0, 37, 114]; // RGB color for temp value 35 or higher
    if (temp <= 0) {
        return `rgb(${tempColorStart[0]}, ${tempColorStart[1]}, ${tempColorStart[2]})`;
    } else if (temp >= 35) {
        return `rgb(${tempColorEnd[0]}, ${tempColorEnd[1]}, ${tempColorEnd[2]})`;
    } else {
        const r = Math.round(
            ((35 - temp) * (tempColorEnd[0] - tempColorStart[0])) / 35 +
                tempColorEnd[0]
        );
        const g = Math.round(
            ((35 - temp) * (tempColorEnd[1] - tempColorStart[1])) / 35 +
                tempColorStart[1]
        );
        const b = Math.round(
            ((35 - temp) * (tempColorEnd[2] - tempColorStart[2])) / 35 +
                tempColorStart[2]
        );
        return `rgb(${r} , ${g}, ${b})`;
    }
}

// Function to calculate the color based on usaqi value
function calculatePollColor(usaqi) {
    const pollColorStart = [79, 147, 186]; // RGB color for usaqi value 0 or less
    const pollColorEnd = [185, 185, 185]; // RGB color for usaqi value 450 or higher

    if (usaqi <= 50) {
        return `rgb(${pollColorStart[0]}, ${pollColorStart[1]}, ${pollColorStart[2]})`;
    } else if (usaqi >= 300) {
        return `rgb(${pollColorEnd[0]}, ${pollColorEnd[1]}, ${pollColorEnd[2]})`;
    } else {
        const r = Math.round(
            ((300 - usaqi) * (pollColorEnd[0] - pollColorStart[0])) / 300 +
                pollColorStart[0]
        );
        const g = Math.round(
            ((300 - usaqi) * (pollColorEnd[1] - pollColorStart[1])) / 300 +
                pollColorStart[1]
        );
        const b = Math.round(
            ((300 - usaqi) * (pollColorEnd[2] - pollColorStart[2])) / 300 +
                pollColorStart[2]
        );
        return `rgb(${r}, ${g}, ${b})`;
    }
}

