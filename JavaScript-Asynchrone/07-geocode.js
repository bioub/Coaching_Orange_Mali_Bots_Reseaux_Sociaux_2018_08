const axios = require('axios');

const adresse = process.argv[2];

if (!adresse) {
  console.log('Il faut passer une adresse au programme');
  process.exit(1); // kill le process (1 pour erreur)
}

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' 
 + encodeURI(adresse);

/*
axios.default.get(url)
  .then((res) => {
    if (res.data.error_message) {
      console.log('Erreur de Google API');
      console.log(res.data.error_message);
      process.exit(1);
    }

    console.log('Adresse formatée : ' + res.data.results[0].formatted_address);
    console.log('Latitude : ' + res.data.results[0].geometry.location.lat);
    console.log('Longitude : ' + res.data.results[0].geometry.location.lng);
  })
  .catch((err) => console.log(err));
*/

async function requestGoogle() {
  const res = await axios.default.get(url);

  if (res.data.error_message) {
    console.log('Erreur de Google API');
    console.log(res.data.error_message);
    process.exit(1);
  }
  
  console.log('Adresse formatée : ' + res.data.results[0].formatted_address);
  console.log('Latitude : ' + res.data.results[0].geometry.location.lat);
  console.log('Longitude : ' + res.data.results[0].geometry.location.lng);
}

requestGoogle()
  .catch((err) => console.log(err));