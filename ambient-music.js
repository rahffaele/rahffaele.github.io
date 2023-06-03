function play(){

let synth = new Tone.DuoSynth({
  harmonicity: 12,
  voice0: {
    oscillator: {type: 'sawtooth'},
    envelope: {
      attack: 0.5,
      release: 4,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 200,
      octaves: 1,
      attack: 0,
      decay: 0,
      release: 1000
    }
  },
  voice1: {
    oscillator: {type: 'sine'},
    envelope: {
      attack: 0.5,
      release: 4,
      releaseCurve: 'linear'
    },
    filterEnvelope: {
      baseFrequency: 150,
      octaves: 1,
      attack: 0,
      decay: 0,
      release: 1000
    },
  vibratoRate: 0.5,
  vibratoAmount: 0.1
  }
});
synth.toMaster();


new Tone.Loop(time => {
  synth.triggerAttackRelease('G4', '2n', '+4n');
  envelope: {
      attack: 0.5,
      release: 4,
      releaseCurve: 'linear'
    },
}, '1m').start();


Tone.Transport.bpm.value = 120;

// Tone's Transport needs to be started for any loops to become active
Tone.Transport.start();
}



{}