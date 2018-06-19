# Browser Geolocation

## Usage
1. [Uses Google's maps API so a key must be generated](https://developers.google.com/maps/documentation/geocoding/get-api-key)
2. [Uses specifically reverse geocoding to pass in lat/lng and get an address back](https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding)
3. [Uses the Browser's native geocoding API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
4. [Also uses the Browser's native Fetch method through a polyfill to make external HTTP requests](https://github.com/github/fetch)
5. Use VPN in the US/Canada to check for Zip code identification. Otherwise it'll display Country instead of ZIP

## Demonstration
![Gif demonstrating functionality](http://g.recordit.co/KFUUepCSxU.gif)