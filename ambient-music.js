let isPlaying = false;
let loopOne, loopTwo, loopThree, loopFour, loopHighMelody;
let synthOne, synthTwo, synthThree, synthFour, highMelody;

async function play() {
  if (isPlaying) {
    // Stop the music if it's already playing
    Tone.Transport.stop();
    Tone.Transport.cancel();
    loopOne.stop();
    loopTwo.stop();
    loopThree.stop();
    loopFour.stop();
    loopHighMelody.stop();
    synthOne.dispose();
    synthTwo.dispose();
    synthThree.dispose();
    synthFour.dispose();
    highMelody.dispose();

    const button = document.getElementById('startStop');
    button.textContent = "Play"
    isPlaying = false;

  } else {

  	const button = document.getElementById('startStop');
    button.textContent = "Pause"
    isPlaying = false;

    try {
      	const citySelect = document.getElementById('citySelect');
      	const selectedCity = citySelect.value;

      	const apiKey = '49a5b64679cabaa392cc7fe6b5826a92';
      	const city = selectedCity;

      	const response = await axios.get(
        	`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      	);

      	console.log(response.data); // Control

      	

      const { temp, humidity } = response.data.main;
      const windSpeed = response.data.wind.speed;
      const maxWindSpeed = 20; // Define the maximum wind speed you want to map to the BPM range
      const minBPM = 60; // Define the minimum BPM
      const maxBPM = 180; // Define the maximum BPM

      // Calculate the new BPM value based on the wind speed
      const newBPM = (windSpeed / maxWindSpeed) * (maxBPM - minBPM) + minBPM;

      Tone.Transport.bpm.value = newBPM;

      // Log the wind speed and new BPM value to the console
      console.log('Wind Speed:', windSpeed);
      console.log('New BPM:', newBPM);
      console.log('temp', temp);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    try {
    	const apiKeyTomTom = "kkAyqHVBG9Haepu1D3JZBnXmy016m8QP";
			const responseTomTom = await axios.get(
        		`https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/xml?key=${apiKeyTomTom}&point=52.41072,4.84239`
      		);
		console.log(responseTomTom.data); // Control
		//const { temp, humidity } = response.data.main;
		const { currentSpeed, CurrentTravelTime } = response.data.main;
		console.log("currentSpeed", currentSpeed);
		} catch (error) {
      		console.error('Error fetching traffic data:', error);
    	}

    function makeSynthOne() {
      let envelope = {
        attack: 0.4,
        release: 0.5,
        decay: 0.5,
        releaseCurve: 'linear',
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
        volume: -10,
        voice0: {
          oscillator: { type: 'sawtooth' },
          envelope,
          filterEnvelope,
          filterEnvelope2,
        },
        voice1: {
          oscillator: { type: 'triangle' },
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
        releaseCurve: 'linear',
      };
      let filterEnvelope = {
        baseFrequency: 300,
        octaves: 1,
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
        volume: -20,
        voice0: {
          oscillator: { type: 'sine' },
          envelope,
          filterEnvelope,
        },
        voice1: {
          oscillator: { type: 'sine' },
          envelope,
          filterEnvelope,
        },
        vibratoRate: 0.4,
        vibratoAmount: 0.1,
      });
    }

    synthOne = makeSynthOne();
    synthTwo = makeSynthOne();

    synthThree = makeSynthTwo();
    synthFour = makeSynthTwo();
    highMelody = makeSynthTwo();

    let leftPanner = new Tone.Panner(-0.5); // No longer connected to master!
    let rightPanner = new Tone.Panner(0.5); // No longer connected to master!
    let echo = new Tone.FeedbackDelay('8n', 0.2);
    let delay = new Tone.Delay(8.0);
    let delayFade = new Tone.Gain(0.5);

    delay.delayTime.value = 8.0;
    delayFade.gain.value = 0.75;

    synthOne.connect(leftPanner);
    synthTwo.connect(rightPanner);

    synthThree.connect(echo);
    synthFour.connect(echo);

    highMelody.connect(echo);

    leftPanner.connect(echo);
    rightPanner.connect(echo);

    echo.toMaster();
    echo.connect(delay);
    delay.connect(Tone.context.destination);
    delay.connect(delayFade);
    delayFade.connect(delay);

    loopOne = new Tone.Loop((time) => {
      // Trigger C5, and hold for a full note (measure) + two 1/4 notes
      synthOne.triggerAttackRelease('C5', '2:0', time);
      // Switch note to D5 after two 1/4 notes without retriggering
      synthOne.setNote('D5', '+2:2');
      // Trigger E4 after 6 measures and hold for two 1/4 notes.
      synthOne.triggerAttackRelease('E4', '0:2', '+6:0');

      // Trigger G4 after 11 measures + a two 1/4 notes, and hold for two 1/4 notes.
      synthOne.triggerAttackRelease('G4', '0:2', '+11:2');

      // Trigger E5 after 19 measures and hold for 2 measures.
      // Switch to G5, A5, G5 after delay of a 1/4 note + two 1/16 notes each.
      synthOne.triggerAttackRelease('E4', '2:0', '+19:0');
      synthOne.setNote('G4', '+19:1:2');
      synthOne.setNote('A4', '+19:3:0');
      synthOne.setNote('G4', '+19:4:2');
    }, '26m').start();

    loopTwo = new Tone.Loop((time) => {
      // Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
      synthTwo.triggerAttackRelease('D4', '1:2', '+5:0');
      // Switch to E4 after one more measure
      synthTwo.setNote('E4', '+6:0');

      // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
      synthTwo.triggerAttackRelease('B3', '1m', '+11:2:2');
      // Switch to G3 after a 1/2 note more
      synthTwo.setNote('G3', '+12:0:2');

      // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
      synthTwo.triggerAttackRelease('G4', '0:2', '+23:2');
    }, '30m').start();

    loopThree = new Tone.Loop((time) => {
      synthThree.triggerAttackRelease('G2', '6:0', '+0:2');
      synthThree.setNote('C2', '4:0', '+2.0');

      synthThree.triggerAttackRelease('B2', '6:0', '+2:0');
      synthThree.setNote('E2', '4:0', '+2:0');
      synthThree.setNote('G2', '4:0');
      synthThree.triggerAttackRelease('C2', '4:0', '+2:0');
    }, '32m').start();

    loopFour = new Tone.Loop((time) => {
      synthFour.triggerAttackRelease('C2', '6:0', '+0:3:2');
      synthFour.setNote('E1', '4:0', '+1.0');

      synthFour.triggerAttackRelease('G2', '6:0', '+2:0');
      synthFour.setNote('B2', '2:0', '+2:0');
      synthFour.setNote('G2', '2:0', '+2:0');

      synthFour.triggerAttackRelease('E2', '6:0', '+1:0');
    }, '34m').start();

    loopHighMelody = new Tone.Loop((time) => {
      highMelody.triggerAttackRelease('E7', '6:0', '+0:2');
      highMelody.setNote('C7', '4:0', '+2.0');

      highMelody.triggerAttackRelease('B7', '6:0', '+2:0');
      highMelody.setNote('E7', '4:0', '+2:0');
      highMelody.setNote('G7', '4:0');

      highMelody.triggerAttackRelease('C7', '4:0', '+2:0');
    }, '30m').start();

    Tone.Transport.start();
    isPlaying = true;
  }

  //Tone.Transport.bpm.value = 120;
}
