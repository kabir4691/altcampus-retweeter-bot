const https = require('https');

function start() {
  setInterval(() => {
    https.get('https://altcampus.io', res => {
      console.log(res);
    })
  }, 1000 * 60 * 15);
}

module.exports = {
  start
}
