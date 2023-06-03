function play(){

let synth = new Tone.MonoSynth();
synth.toMaster();
synth.triggerAttackRelease('C4', 1);
}

{}