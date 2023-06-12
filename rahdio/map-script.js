var map = tt.map({
  key: 'USTngt7UAAlrt9s5ynLt8byJD00ae9hv',
  container: 'map',
  style: 'tomtom://vector/1/basic-main',
  center: [45.4776, 9.2088],
  zoom: 12
});

fetch('../rahdio/milan-map.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here
    console.log(data); // Example: Display the parsed JSON data in the console

    // Extract coordinates and add markers to the map
})
  .catch(error => {
    console.error('Error:', error);
});
