fetch('../resource/bass.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => console.log('Received', arrayBuffer))
  .catch(e => console.error(e));