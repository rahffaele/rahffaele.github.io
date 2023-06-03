function play(){

function makeSynth() {
  let envelope = {
    attack: 0.4,
    release: 4,
    releaseCurve: 'linear'
  };
  let filterEnvelope = {
    baseFrequency: 100,
    octaves: 1,
    attack: 0,
    decay: 0,
    release: 1000
  };

  return new Tone.DuoSynth({
    harmonicity: 4,
    volume: -5,
    voice0: {
      oscillator: {type: 'sawtooth'},
      envelope,
      filterEnvelope
    },
    voice1: {
      oscillator: {type: 'sine'},
      envelope,
      filterEnvelope
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1
  });
}

let synthOne = makeSynth();
let synthTwo = makeSynth();

let leftPanner = new Tone.Panner(-0.5); // No longer connected to master!
let rightPanner = new Tone.Panner(0.5); // No longer connected to master!
let echo = new Tone.FeedbackDelay('8n', 0.2);
let delay = new Tone.Delay(8.0);
let delayFade = new Tone.Gain(0.5);

delay.delayTime.value = 6.0;
delayFade.gain.value = 0.75;

synthOne.connect(leftPanner);
synthTwo.connect(rightPanner);
leftPanner.connect(echo);
rightPanner.connect(echo);

echo.toMaster();
echo.connect(delay);
delay.connect(Tone.context.destination);
delay.connect(delayFade);
delayFade.connect(delay);


new Tone.Loop(time => {
    // Trigger C5, and hold for a full note (measure) + two 1/4 notes
  synthOne.triggerAttackRelease('C5', '1:2', time);
  // Switch note to D5 after two 1/4 notes without retriggering
  synthOne.setNote('D5', '+0:2');
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
}, '34m').start();

new Tone.Loop(time => {
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
}, '37m').start();

Tone.Transport.start();

Tone.Transport.bpm.value = 120;
}



{}