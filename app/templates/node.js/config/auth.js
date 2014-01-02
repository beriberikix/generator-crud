// expose our config directly to our application using module.exports
module.exports = {

  'twitterAuth' : {
    'consumerKey' 		: 'your-consumer-key-here',
    'consumerSecret' 	: 'your-client-secret-here',
    'callbackURL' 		: 'your-url-path-here/auth/twitter/callback'
  },

	'googleAuth' : {
    'clientID'      : 'your-secret-clientID-here',
    'clientSecret' 	: 'your-client-secret-here',
    'callbackURL' 	: '<%= your-url-path-here/auth/google/callback %>'
	}

};