function play(){

let audioContext = new AudioContext();

fetch('../resource/bass.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    let sourceNode = audioContext.createBufferSource();

    
    sourceNode.buffer = audioBuffer;
    sourceNode.loop = true;
    sourceNode.connect(audioContext.destination);
    sourceNode.start();
    
  })
  .catch(e => console.error(e));

  }