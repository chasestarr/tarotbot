var deck = require('./tarot.json');

function listToArray(list){
	var array = [];
	for(var i = 1; i < 79; i++){
		array.push(list[i]);
	}
	return array;
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function read(){
	var draw = function(n){
		var shuffled = shuffle(listToArray(deck));
		var draw = [];
		for(var i = 0; i < n; i++){
			draw.push(shuffled[i]);
		}
		return draw;
	}
	
	var drawThree = draw(3);
	
	var keys = drawThree.map(function(x){
		return x.card_meaning.split(", ");
		}).reduce(function(s,array){
			var r = Math.floor(Math.random(5)* array.length);
			var out =  s + array[r] + " ";
			return out.toLocaleLowerCase();
		}, "");
	
	var names = drawThree.map(function(x){
		return x.card_name;
		}).reduce(function(titles,card){
			return titles + card + "\n";
		}, "");
	
	// var out = (keys + "\n\n" + names).length;
	return  keys + "\n\n" + names;
}

exports.read = read;
// console.log(read());