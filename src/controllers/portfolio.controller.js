const Twit = require('twit');

const getUserTweets = async (req, res, next) => {
  const { user_name } = req.params;

  const T = new Twit({
    consumer_key:         'DfSnG9JkWJIKYJF9wQwoWTpTS',
    consumer_secret:      'gx3yHScpDeuP72GBuMbkE5J01x5841dbVK7OwRl4s8eqR2Kx4v',
    access_token:         '212705612-j9LRGolVSZvUnDJtBvOJRUPfGNpmGlejaa1EnoWF',
    access_token_secret:  'gY3wjO9dJNACsH7S1HCAlfhl6UhIkj19T0DR3EgJGvkIX',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })
  
  const params = {screen_name: 'Cristiano Ronaldo' , count: 10};
  T.get('statuses/user_timeline', params, function(error, tweets, response) {
    const allTweets = tweets.map(tweet => tweetsToUI(tweet));
    console.log(allTweets);
    res.json(allTweets);
  });
  
  function tweetsToUI(tweet) {
      return {
          id: tweet.id,
          created_at: tweet.created_at,
          text: tweet.text,
          retweet_count: tweet.retweet_count,
          source: tweet.source,
          lang: tweet.lang,
          location: tweet.user.location,
      }
  }
};

module.exports = {
  getUserTweets,
};
