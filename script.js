var key = 'SOME_FAKE_API_KEY';
//Uses the browser geolocation service to get the location (it'll prompt the user for compliance)
navigator.geolocation.getCurrentPosition((position) => {
  //Gets the coordinates from the position object passed in the callback and injects them in the HTML to be shown
  document.getElementById('coordinates').innerHTML = `The user's coordinates are lat:
  <b>${position.coords.latitude.toFixed(2)}</b> and long: <b>${position.coords.longitude.toFixed(2)}</b>`
  //Uses Googles reverse geocoding to pass in lag/lng and get back the _address_
  // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${key}`, {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=39.4355164,-116.0853246&key=${key}`, {
    method: 'GET',
  }).then((response) => {
    if(response.ok){
      return response.json()
    }
  }).then((parsedResponse) => {
    //once the address is resolved, it takes the results
    const { results } = parsedResponse;
    // The full address will always be the first element in the array
    const fullAddress = results[0];
    // When querying a US/Canada address, the full address' address components last element will be the ZIP Code
    const zipCode = fullAddress.address_components ? fullAddress.address_components.pop() : {long_name: ''};
    //takes the last element in the array (which corresponds to the country)
    const country = results.pop();
    //removes the spinner
    document.getElementById('spinner').remove();
    //displays the country
    document.getElementById('country').innerHTML = `and he/she is located in <b>${country.formatted_address}</b>`
    //display full address
    document.getElementById('fullAddress').innerHTML = `Full address: <b>${fullAddress.formatted_address}</b>`
    //displays zip code
    document.getElementById('zipCode').innerHTML = `Zip code: <b>${zipCode.long_name}</b>`
  })
});