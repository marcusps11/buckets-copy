var express = require('express');
var router 	= express.Router();

var twitterController = require('../controllers/twitterController');
var instagramController = require('../controllers/instagramController');
var mailgunController = require('../controllers/mailgunController');
var clubsController = require('../controllers/clubsController');



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


// Club routes
router.route('/clubs')
  .post(clubsController.clubsCreate)
  .get(clubsController.clubsIndex)

router.route('/clubs/:id')
  .get(clubsController.clubsShow)
  .put(clubsController.clubsUpdate)
  .delete(clubsController.clubsDelete)



module.exports = router;