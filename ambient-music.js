function play(){

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
synth.toMaster();


new Tone.Loop(time => {
  synth.triggerAttackRelease('G4', '2n', '+4n');
}, '1m').start();


Tone.Transport.bpm.value = 120;

// Tone's Transport needs to be started for any loops to become active
Tone.Transport.start();
}



{}