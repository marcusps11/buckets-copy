var request = require('request');
var Instagram = require('instagram-node').instagram();


Instagram.use({ client_id: '69154b04b9614f809300b576c53f5ac3',
         			client_secret: '0cec0a11389a493c8d1e08bf0e32f9e2' });

var baseURL = 'https://api.instagram.com/oauth/authorize';
var redirect_uri = 'http://frb-refactor.herokuapp.com/api/instagram/callback';

function authorize_user(req, res) {
	console.log('g')
	res.redirect(Instagram.get_authorization_url(redirect_uri));
}

function handleauth(req, res) {
	console.log('hello');
	Instagram.authorize_user(req.query.code, redirect_uri, function(err, result) {
		if(err) {
		} else {
			console.log(result)
			res.send();
		}
	});
} 



function getInstagram(req, res) {
	Instagram.use({ access_token: '2318438226.69154b0.10dc1e9b76b147f4918d061648d7a6af' });
	Instagram.user_media_recent('2318438226', function(err, medias, pagination, remaining, limit){ 
		console.log(medias[0].caption.text)
		res.json({image: medias[0].images.standard_resolution.url,
							caption:medias[0].caption.text })
	});
}



module.exports = {
	authorize_user:  authorize_user,
	handleauth: handleauth,
	getInstagram:getInstagram
};