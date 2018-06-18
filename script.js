var key = 'SOME_DUMMY_API_KEY';
//Uses the browser geolocation service to get the location (it'll prompt the user for compliance)
navigator.geolocation.getCurrentPosition((position) => {
  //Gets the coordinates from the position object passed in the callback and injects them in the HTML to be shown
  document.getElementById('coordinates').innerHTML = `The user's coordinates are lat:
  <b>${position.coords.latitude.toFixed(2)}</b> and long: <b>${position.coords.longitude.toFixed(2)}</b>`
  //Uses Googles reverse geocoding to pass in lag/lng and get back the _address_
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${key}`, {
    method: 'GET',
  }).then((response) => {
    if(response.ok){
      return response.json()
    }
  }).then((parsedResponse) => {
    //once the address is resolved, it takes the results
    const { results } = parsedResponse;
    //takes the last element in the array (which corresponds to the country)
    const country = results.pop();
    //removes the spinner
    document.getElementById('spinner').remove();
    //displays the country
    document.getElementById('country').innerHTML = `and he/she is located in <b>${country.formatted_address}</b>`
  })
});