const axios = require('axios');
const config = require('./config.json');

const app_id = config.app_id;
const app_secret = config.app_secret;

// peut également s'écrire (ES6)
// const { app_id, app_secret } = config;

async function getAuthToken() {
  // step 1 : https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
  let base64Credentials = Buffer.from(encodeURI(app_id) + ':' + encodeURI(app_secret)).toString('base64');

  const body = 'grant_type=client_credentials';

  const headers = {
    'Authorization': 'Basic ' + base64Credentials,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  };

  const res = await axios.default.post('https://api.twitter.com/oauth2/token', body, { headers });

  return res.data.access_token;
}

async function getTimeline() {
  const access_token = await getAuthToken();

  const headers = {
    'Authorization': 'Bearer ' + access_token,
  };

  const res = await axios.default.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=orange',
    { headers }
  );

  for (const tweet of res.data) {
    console.log(tweet.text);
  }
}

getTimeline().catch((err) => console.log(err.response.data));
