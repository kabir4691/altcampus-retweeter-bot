const twit = require('twit');
const config = require('../utils/config');

const Twit = new twit(config.twit.options);

const INTERVAL = 1000 * 60 * 60 * 4;

function start() {
  
  function likeAllTweets() {
    console.log({searchParams: config.twit.searchParams.like});

    Twit.get('search/tweets', config.twit.searchParams.like, (err, data) => {
      if (err) return console.log('search tweets error', err);
      console.log('search tweets response', data);

      if (data.statuses.length === 0) return;

      data.statuses.forEach(status => {
        Twit.post('favorites/create', { id: status.id_str, include_entities: false }, (err, data) => {
          if (err) return console.log('like tweet error', err);
        console.log('like tweet response', data);
        });
      }) 
    });
  }
  
  setInterval(likeAllTweets, INTERVAL);
}

module.exports = {
  start
}

