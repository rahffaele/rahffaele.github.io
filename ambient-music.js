function play(){

function makeSynthOne() {
   let envelope = {
    attack: 0.4,
    release: 0.5,
    decay: 0.5,
    releaseCurve: 'linear'
  };
  let filterEnvelope = {
    baseFrequency: 300,
    octaves: 1,
    attack: 2,
    decay: 3,
    release: 1000
  };
  let filterEnvelope1 = {
    baseFrequency: 500,
    octaves: -1,
    attack: 1,
    decay: 4,
    release: 5
  };
  let filterEnvelope2 = {
    baseFrequency: 300,
    octaves: 3,
    attack: 1,
    decay: 4,
    release: 5
  }



  return new Tone.DuoSynth({
    harmonicity: 2,
    volume: -10,
    voice0: {
      oscillator: {type: 'sawtooth'},
      envelope,
      filterEnvelope,
      filterEnvelope2
    },
    voice1: {
      oscillator: {type: 'triangle'},
      envelope,
      filterEnvelope1,
      filterEnvelope
    },
    vibratoRate: 0.3,
    vibratoAmount: 0.1
  });
}

function makeSynthTwo() {
  let envelope = {
    attack: 0.5,
    release: 2,
    decay: 4,
    releaseCurve: 'linear'
  };
  let filterEnvelope = {
    baseFrequency: 300,
    octaves: 1,
    attack: 2,
    decay: 3,
    chorus: 5,
    release: 1000
  };
  let filterEnvelope1 = {
    baseFrequency: 500,
    octaves: -1,
    attack: 1,
    decay: 4,
    release: 5
  };
  let filterEnvelope2 = {
    baseFrequency: 300,
    octaves: 3,
    attack: 1,
    decay: 4,
    release: 5
  }

  return new Tone.DuoSynth({
    harmonicity: 4,
    volume: -20,
    voice0: {
      oscillator: {type: 'sine'},
      envelope,
      filterEnvelope
    },
    voice1: {
      oscillator: {type: 'sine'},
      envelope,
      filterEnvelope
    },
    vibratoRate: 0.4,
    vibratoAmount: 0.1
  });
}

let synthOne = makeSynthOne();
let synthTwo = makeSynthOne();

let synthThree = makeSynthTwo();

let leftPanner = new Tone.Panner(-0.5); // No longer connected to master!
let rightPanner = new Tone.Panner(0.5); // No longer connected to master!
let echo = new Tone.FeedbackDelay('8n', 0.2);
let delay = new Tone.Delay(8.0);
let delayFade = new Tone.Gain(0.5);

let bassVol = new Tone.Volume(-80).toDestination();
let bass = new Tone.Oscillator().connect(bassVol).start();

delay.delayTime.value = 8.0;
delayFade.gain.value = 0.75;

synthOne.connect(leftPanner);
synthTwo.connect(rightPanner);
synthThree.toMaster();

leftPanner.connect(echo);
rightPanner.connect(echo);

echo.toMaster();
echo.connect(delay);
delay.connect(Tone.context.destination);
delay.connect(delayFade);
delayFade.connect(delay);

new Tone.Loop(time => {
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
}, '30m').start();

new Tone.Loop(time => {
  synthThree.triggerAttackRelease('G2', '6:0', '+0:2');
  synthThree.setNote('C2', '4:0', '+2.0');

  synthThree.triggerAttackRelease('B2', '6:0', '+2:0');
  synthThree.setNote('E2', '4:0', '+2:0');
  synthThree.setNote('G2', '4:0',);

  synthThree.triggerAttackRelease('C2', '4:0', '+2:0');
}, '32m').start();

new Tone.Loop(time => {
  synthThree.triggerAttackRelease('C2', '6:0', '+0:3:2');
  synthThree.setNote('E1', '4:0', '+1.0');

  synthThree.triggerAttackRelease('G1', '6:0', '+2:0');
  synthThree.setNote('B1', '2:0', '+2:0');
  synthThree.setNote('G1', '2:0', '+2:0');

  synthThree.triggerAttackRelease('E2', '6:0', '+1:0');
}, '34m').start();


Tone.Transport.start();

Tone.Transport.bpm.value = 120;
}



{}