var Twitter = require('twitter');

var Client = new Twitter({
	consumer_key: 'fT9al20NXvS7EF7ZUUz4BG6D3',
	consumer_secret: 'Le5XSau4heyv539rkqFWjTb1w77m1UMZwtNq7mSK1ZAYurfMcw',
	access_token_key: '21439387-4N4UOTBNel3RLWXP42xVEiLRVv7I6exDJJgshPXWf',
	access_token_secret: 'MHYiywFf569xmsJBPsFgWle9rLOzrsKauf9wJ0mpWfBv1'
});


function getTweets(req, res) {
	console.log('yo')
	Client.get('statuses/user_timeline', {user_id: 3375835551}, function(error, tweets) {
			if (error) {
			console.log(error);
		} else {
			console.log(tweets);
		}
		res.status(200).json({tweets: tweets[0].text});
	});
}



module.exports = {
	getTweets:   getTweets,
};