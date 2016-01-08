var config = require('./config');
var tarot = require('./reading');
var Twit = require('twit');


// function tweet(){
// 	var T = new Twit(config);
	
// 	function uploaded(err,data,res){
// 		var msg = tDeckName + "\n#keepOrMulligan ?" + "\nlink: " + tDeckUrl;
// 		console.log(msg);
// 		var tweetStatus = {
// 			status: msg,
// 			media_ids:[id]
// 		};
// 		T.post('statuses/update', tweetStatus, tweetpush);
// 		function tweetpush(err,data,res){
// 			console.log("image posted!");
// 		}
// 	}
// }

function tweet(){
	var T = new Twit(config);
	
	var tweetStatus = {
		status: tarot.read()
	};
	console.log(tweetStatus);
	
	T.post('statuses/update', tweetStatus, tweetpush);
	function tweetpush(err,data,res){
		console.log("tweet posted!");
	}
}

tweet();
setInterval(tweet,1000*60*10);