const twit = require('twit');
const config = require('../utils/config');
const userList = require('../utils/userList');

const Twit = new twit(config.twit.options);

const INTERVAL = 1000 * 60 * 60 * 24;

function start() {
  
  function retweetMostLiked() {
    console.log({searchParams: config.twit.searchParams.retweet});

    Twit.get('search/tweets', config.twit.searchParams.retweet, (err, data) => {
      if (err) return console.log('search tweets error', err);
      console.log('search tweets response', data);

      if (data.statuses.length === 0) return;

      const mostLikedTweet = data.statuses
      .filter(status => userList.includes(status.user.screen_name))
      .reduce((result, current) => {
        return current.favorite_count > result.favorite_count ? current : result;
      });

      console.log({mostLikedTweet});
      Twit.post('statuses/retweet/:id', { id: mostLikedTweet.id_str }, (err, data) => {
        if (err) return console.log('post retweet error', err);
      console.log('post retweet response', data);
      });
      
    });
  }
  
  setInterval(retweetMostLiked, INTERVAL);
}

module.exports = {
  start
}

