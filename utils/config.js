require('dotenv').config();
const moment = require('moment');

const getSearchDate = () => {
  const todayMoment = moment().utcOffset(330);
  const yesterdayMoment = moment().utcOffset(330).subtract(1, 'day');
  return `since:${yesterdayMoment.format('YYYY-MM-DD')} until:${todayMoment.format('YYYY-MM-DD')}`;
}

const twit = {
  options: {
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET_KEY,
    access_token: process.env.TWITTER_ACESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  searchParams: {
    q: `#AltCampus -filter:retweets ${getSearchDate()}`,
    lang: 'en',
    count: 100,
    result_type: 'recent',
    include_entities: false
  }
}

module.exports = {
  twit
}