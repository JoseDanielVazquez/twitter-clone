const axios = require('axios')
const TWITTER_URL = 'https://api.twitter.com/1.1/search/tweets.json'

class Twitter {
  get(query) {
    return axios.get(TWITTER_URL, {
      params: {
        q: query,
        count: 10,
        tweet_mode: "extended"
      },
      headers: {
        "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
      }
    })
  }
}

module.exports = Twitter
