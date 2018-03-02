
// require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var request = require('request');
var fs = require('fs');


var keys = require('key.js')

        var client = new client(keys.client);
        var clientSpotify = new spotify(keys.spotify);



         var inputs = process.argv.splice(2);


            var command = inputs[0];
            console.log(command);

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
// switch (action) {
//     case "total":
//       total();
//       break;
  
//     case "deposit":
//       deposit();
//       break;
  
//     case "withdraw":
//       withdraw();
//       break;
  
//     case "lotto":
//       lotto();
//       break;
//   }


switch(command){
	case 'my-tweets':
		myTweets();
		break;
	case 'spotify-this-song':
		spotifyThisSong(inputs);
		break;
	case 'movie-this':
		movieThis(inputs);
		break;
	case 'do-what-it-says':
		doWhatItSays();
		break;
}


function myTweets(){
	client.get('statuses/user_timeline', { screen_name: 'victoliae', count: 20 }, function(error, tweets, response) {
		if(error){
			console.log(error);
			return;
		}
		var counter = 0;
		tweets.map(function(tweet){
			counter ++;
			console.log('tweet ' + counter + ': ' + tweet.text);
		})
	});
}

function spotifyThisSong(inputs){
	var songName = '';
	for(var i = 1; i < inputs.length;i++){
		console.log("For loop");
		songName = songName + ' ' + inputs[i];
	}
	if(songName == ''){
		songName = 'TheSign';
	}
	
	console.log(songName)
	clientSpotify.search({type:'track', query:songName}, function(error, data){
		if (error){
			console.log('Error occured: ' + error);
			return;
		}
		console.log('hi');
				for(var i = 0; i < data.tracks.items.length;i++){
			console.log(data.tracks.items[i]);
		}
	});	

}

                function movieThis(inputs){

                    var movieName = '';
                    for(var i = 1; i < inputs.length;i++){
                        console.log("For loop");
                        movieName = movieName + ' ' + inputs[i];
                    }

                    //Mr. Nobody?
                    if(movieName == ''){
                        movieName = 'Mr. Nobody';
                    }

                
                    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


                    request(queryUrl, function(error, response, body) {

                        if (!error && response.statusCode === 200) {

                            console.log(response);
                        
                            console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
                        }
                    });


                }

function doWhatItSays(){
	fs.readFile("random.txt", "utf8", function(error, data) {
    	var fileContents = data.split(",");
    	var command = fileContents[0];
	
			if(command == "spotify-this-song"){
    				spotifyThisSong(fileContents[1]);
    	}
    });
}