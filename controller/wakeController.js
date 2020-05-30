const https = require('https');

function start() {
  setInterval(() => {
    https.get('https://altcampus-retweeter-bot.herokuapp.com/', res => {
      console.log(res);
    })
  }, 1000 * 60 * 15);
}

module.exports = {
  start
}
