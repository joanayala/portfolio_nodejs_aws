const Twit = require('twit')
 
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
});

function tweetsToUI(tweet) {
    return {
        name: tweet.user.location,
    }
}