function makeSynth() {
  let envelope = {
    attack: 0.1,
    release: 4,
    releaseCurve: 'linear'
  };
  let filterEnvelope = {
    baseFrequency: 200,
    octaves: 2,
    attack: 0,
    decay: 0,
    release: 1000
  };

  return new Tone.DuoSynth({
    harmonicity: 1,
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

let leftSynth = makeSynth();
let rightSynth = makeSynth();

let leftPanner = new Tone.Panner(-0.5).toMaster();
let rightPanner = new Tone.Panner(0.5).toMaster();

leftSynth.connect(leftPanner);
rightSynth.connect(rightPanner);

new Tone.Loop(time => {
  leftSynth.triggerAttackRelease('C5', '1:2', time);
  leftSynth.setNote('D5', '+0:2');

  leftSynth.triggerAttackRelease('E4', '0:2', '+6:0');

  leftSynth.triggerAttackRelease('G4', '0:2', '+11:2');

  leftSynth.triggerAttackRelease('E5', '2:0', '+19:0');
  leftSynth.setNote('G5', '+19:1:2');
  leftSynth.setNote('A5', '+19:3:0');
  leftSynth.setNote('G5', '+19:4:2');
}, '34m').start();

new Tone.Loop(time => {
// Trigger D4 after 5 measures and hold for 1 full measure + two 1/4 notes
  rightSynth.triggerAttackRelease('D4', '1:2', '+5:0');
  // Switch to E4 after one more measure
  rightSynth.setNote('E4', '+6:0');

  // Trigger B3 after 11 measures + two 1/4 notes + two 1/16 notes. Hold for one measure
  rightSynth.triggerAttackRelease('B3', '1m', '+11:2:2');
  // Switch to G3 after a 1/2 note more
  rightSynth.setNote('G3', '+12:0:2');

  // Trigger G4 after 23 measures + two 1/4 notes. Hold for a half note.
  rightSynth.triggerAttackRelease('G4', '0:2', '+23:2');
}, '37m').start();

Tone.Transport.start();