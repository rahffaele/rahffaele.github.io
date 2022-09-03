function play(){

let audioContext = new AudioContext();

fetch('../resource/bass.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = true;
    sourceNode.loopStart = 0.5;
    sourceNode.connect(audioContext.destination);
    sourceNode.start(0, 0.5);
    
  })
  .catch(e => console.error(e));

  }