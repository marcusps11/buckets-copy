var express = require('express');
var router 	= express.Router();

var twitterController = require('../controllers/twitterController');
var instagramController = require('../controllers/instagramController');
var mailgunController = require('../controllers/mailgunController');



router.route('/twitter')
.get(twitterController.getTweets);


router.route('/instagram')
.get(instagramController.authorize_user);

router.route('/sendmessage')
.post(mailgunController.sendMessage);


router.route('/instagram/callback')
.get(instagramController.handleauth);



router.route('/instagram/get')
.get(instagramController.getInstagram);





module.exports = router;