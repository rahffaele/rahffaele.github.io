const warm_pad = {
  'WARM PAD' : [
    {note: 'A#', octave: 4, file: "../samples/Warm pad/Warm pad A#4.wav"},
    {note: 'A', octave: 4, file: "../samples/Warm pad/Warm pad A4.wav"},
    {note: 'B', octave: 4, file: "../samples/Warm pad/Warm pad B4.wav"},
    {note: 'C#', octave: 4, file: "../samples/Warm pad/Warm pad C#4.wav"},
    {note: 'C', octave: 4, file: "../samples/Warm pad/Warm pad C4.wav"},
    {note: 'D#', octave: 4, file: "../samples/Warm pad/Warm pad D#4.wav"},
    {note: 'D', octave: 4, file: "../samples/Warm pad/Warm pad D4.wav"},
    {note: 'E', octave: 4, file: "../samples/Warm pad/Warm pad E4.wav"},
    {note: 'F#', octave: 4, file: "../samples/Warm pad/Warm pad F#4.wav"},
    {note: 'F', octave: 4, file: "../samples/Warm pad/Warm pad F4.wav"},
    {note: 'G#', octave: 4, file: "../samples/Warm pad/Warm pad G#4.wav"},
    {note: 'G', octave: 4, file: "../samples/Warm pad/Warm pad G4.wav"},
    {note: 'C', octave: 5, file: "../samples/Warm pad/Warm pad C5.wav"},
  ]
};

const synth_bass = {
  'SYNTH BASS' : [
    {note: 'A#', octave: 2, file: "../samples/Synth Bass/Synth Bass A#2.wav"},
    {note: 'A', octave: 2, file: "../samples/Synth Bass/Synth Bass A2.wav"},
    {note: 'B', octave: 2, file: "../samples/Synth Bass/Synth Bass B2.wav"},
    {note: 'C#', octave: 2, file: "../samples/Synth Bass/Synth Bass C#2.wav"},
    {note: 'C', octave: 2, file: "../samples/Synth Bass/Synth Bass C2.wav"},
    {note: 'D#', octave: 2, file: "../samples/Synth Bass/Synth Bass D#2.wav"},
    {note: 'D', octave: 2, file: "../samples/Synth Bass/Synth Bass D2.wav"},
    {note: 'E', octave: 2, file: "../samples/Synth Bass/Synth Bass E2.wav"},
    {note: 'F#', octave: 2, file: "../samples/Synth Bass/Synth Bass F#2.wav"},
    {note: 'F', octave: 2, file: "../samples/Synth Bass/Synth Bass F2.wav"},
    {note: 'G#', octave: 2, file: "../samples/Synth Bass/Synth Bass G#2.wav"},
    {note: 'G', octave: 2, file: "../samples/Synth Bass/Synth Bass G2.wav"},
    {note: 'C', octave: 3, file: "../samples/Synth Bass/Synth Bass C3.wav"},
  ]
};

const brightness_lead = {
  'BRIGHTNESS LEAD' : [
    {note: 'A#', octave: 5, file: "../samples/Brightness lead/Brightness lead A#5.wav"},
    {note: 'A', octave: 5, file: "../samples/Brightness lead/Brightness lead A5.wav"},
    {note: 'B', octave: 5, file: "../samples/Brightness lead/Brightness lead B5.wav"},
    {note: 'C#', octave: 5, file: "../samples/Brightness lead/Brightness lead C#5.wav"},
    {note: 'C', octave: 5, file: "../samples/Brightness lead/Brightness lead C5.wav"},
    {note: 'D#', octave: 5, file: "../samples/Brightness lead/Brightness lead D#5.wav"},
    {note: 'D', octave: 5, file: "../samples/Brightness lead/Brightness lead D5.wav"},
    {note: 'E', octave: 5, file: "../samples/Brightness lead/Brightness lead E5.wav"},
    {note: 'F#', octave: 5, file: "../samples/Brightness lead/Brightness lead F#5.wav"},
    {note: 'F', octave: 5, file: "../samples/Brightness lead/Brightness lead F5.wav"},
    {note: 'G#', octave: 5, file: "../samples/Brightness lead/Brightness lead G#5.wav"},
    {note: 'G', octave: 5, file: "../samples/Brightness lead/Brightness lead G5.wav"},
    {note: 'C', octave: 6, file: "../samples/Brightness lead/Brightness lead C6.wav"},
  ]
};

const drums = {
  'DRUMS' : [
    {drum : 'snare', file: "../samples/Drums/Snare.wav"},
    {drum : 'kick', file: "../samples/Drums/Kick.wav"},
  ]
};

var synth = Math.floor(Math.random() * 2);

function play(){

if (synth == 0) {
  let audioContext = new AudioContext();

fetch('../samples/Synth Bass/Synth Bass A2.wav')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    //sourceNode.loop = true;
    sourceNode.loopEnd = 0.75;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, 0);
    
  })
  .catch(e => console.error(e));
  synth = Math.floor(Math.random() * 2);
  play();
  }

  if (synth == 1) {
  let audioContext = new AudioContext();

fetch('../samples/Synth Bass/Synth Bass C2.wav')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    //sourceNode.loop = true;
    sourceNode.loopEnd = 0.75;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, 0);
    
  })
  .catch(e => console.error(e));
  synth = Math.floor(Math.random() * 2);
  play();
  }

  if (synth == 2) {
  let audioContext = new AudioContext();

fetch('../samples/Warm pad/Warm pad G4.wav')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    //sourceNode.loop = true;
    sourceNode.loopEnd = 0.75;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, 0);
    
  })
  .catch(e => console.error(e));
  synth = Math.floor(Math.random() * 2);
  play();
  }
}






/*function getSample(instrument, noteAndOctave) {
  let [, requestedNote, requestedOctave] = /^(\w[b#]?)(\d)$/.exec(noteAndOctave);
  requestedOctave = parseInt(requestedOctave, 10);
}

let audioContext = new AudioContext();

function fetchSample(path) {
  return fetch(encodeURIComponent(path))
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
}

*/
























