function play(){

let synth = new Tone.MonoSynth({
  oscillator: {type: 'sawtooth'}
});
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
}

{}