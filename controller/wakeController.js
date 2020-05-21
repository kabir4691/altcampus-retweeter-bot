const http = require('http');

function start() {
  setInterval(() => {
    http.get('https://altcampus-retweeter-bot.herokuapp.com/', res => {
      console.log(res);
    })
  }, 1000 * 60 * 15);
}

module.exports = {
  start
}
