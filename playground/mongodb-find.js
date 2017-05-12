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
db.collection('Todos').find({
	_id: new ObjectID('5914565e47838b070c0668b9')
}).toArray().then((docs) =>{
	console.log('Todos');
	console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
	console.log('Unable to connect', err);
});

db.collection('Todos').find().count().then((count) => {
	console.log(`Todos count: ${count}`);
}, (err) => {
	console.log('Unable to connect', err);
});*/

db.collection('Users').find({
	name: 'Nayan'
}).toArray().then((docs) => {
	console.log('Users are');
	console.log(JSON.stringify(docs, undefined, 2));
})

db.close();
});