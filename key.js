console.log('this is loaded');



exports.twitter = {
  consumer_key: 'GJI8FPd1BD7qYdZJTtsZdcP7w',
  consumer_secret: 'tmNbSO1D8qp44KVFRj3bUEfoAvQe4eFH05vZSrWavTQAhHN8qQ',
  access_token_key: '2580444505-m2JbRXRbet1vZDhNArZVY9ZKFWcR4cGda4vypQu',
  access_token_secret: 'pFl0RIFSaVHZcngJNCyT7Mm35I5VOTk4CLHSvO5ZPBQDU'
}


exports.spotify = {
	id: '0c00aaeb8f9f4cf1819ab97de1a4bb67',
	secret: 'ad90bda50d8149258025ab08b4d18792'
}

//export all the keys
module.exports = {
	twitter: twitterKeys,
	spotify: spotifyKeys
}