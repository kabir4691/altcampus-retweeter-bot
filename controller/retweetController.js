const twit = require('twit');
const config = require('../utils/config');
const userList = require('../utils/userList');

const Twit = new twit(config.twit.options);

const INTERVAL = 1000 * 60 * 60 * 24;

function start() {
  
  function retweetMostLiked() {
    Twit.get('search/tweets', config.twit.searchParams, (err, data) => {
      if (err) return console.log({err});
      console.log({data});

      if (data.statuses.length === 0) return;

      const mostLikedTweet = data.statuses
      .filter(status => userList.includes(status.user.screen_name))
      .reduce((result, current) => {
        return current.favorite_count > result.favorite_count ? current : result;
      });

      Twit.post('statuses/retweet/:id', { id: mostLikedTweet.id_str }, (err, data) => {
        if (err) return console.log({err});
        console.log({data});
      });
      
    });
  }
  
  setInterval(retweetMostLiked, INTERVAL);
}

module.exports = {
  start
}

