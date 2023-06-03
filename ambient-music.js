function play(){

let synth = new Tone.MonoSynth({
  oscillator: {type: 'sawtooth'},
  filterEnvelope: {
    baseFrequency: 200,
    octaves: 1,
    attack: 0,
    decay: 0
  }
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
}

{}