//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect toMongoDb Server');
	}
	console.log('Connected to MongoDb successfully');
/*
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert Todo');
		}
		console.log(JSON.stringify(result.ops, undefined ,2));
	});

	db.collection('Users').insertOne({
		name: 'Nayan',
		age: '20',
		loc: 'Mumbai'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert Todo', err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	});
*/
	db.close();
});