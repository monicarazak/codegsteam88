var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var eventful = require('eventful-node');
var client = new eventful.Client("rcrS54Sn7QXHGhgq");
var loc = "90210";

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.get('/api/:category/:zipcode', function(req, res){
	var category = req.params.category;
	var zipcode = req.params.zipcode;
	res.send("Music " +  category + " " + zipcode);
})

app.get('/api/:category/:zipcode', function(req, res){
	var category = req.params.category;
	var zipcode = req.params.zipcode;
	res.send("Comedy " + category + zipcode);
})

app.get('/api/:category/:zipcode', function(req, res){
	var category = req.params.category;
	var zipcode = req.params.zipcode;
	res.send("Night life " + category + zipcode);
})



function btnMusicPressed () {
	client.searchEvents({ 
		keywords: 'music' , location: loc, date:'This Week'}, function(err,data){
			if(err){
				return console.error(err);
			}

			console.log('Received ' + data.search.total_items + ' events');
			console.log('Event listings: ', data.search.events);

		});
}

function btnComedyPressed () {
	client.searchEvents({ 
		keywords: 'comedy' , location: loc, date:'This Week'}, function(err,data){
			if(err){
				return console.error(err);
			}

			console.log('Received ' + data.search.total_items + ' events');
			console.log('Event listings: ');

		});
}

function btnNightlifePressed () {
	client.searchEvents({ 
		keywords: 'nightlife' , location: loc, date:'This Week'}, function(err,data){
			if(err){
				return console.error(err);
			}

			console.log('Received ' + data.search.total_items + ' events');
			console.log('Event listings: ');

		});
}

btnMusicPressed();
