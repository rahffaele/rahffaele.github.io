function play(){

let audioContext = new AudioContext();

fetch('../samples/Warm pad/Warm pad G4.wav')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = true;
    sourceNode.loopEnd = 0.75;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, 0);
    
  })
  .catch(e => console.error(e));

  }