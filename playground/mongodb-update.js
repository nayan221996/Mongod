//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect toMongoDb Server');
	}
	console.log('Connected to MongoDb successfully');

/*db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('5933d6d33af058cf225f40db')
}, {
	$set: {
		completed: true
	}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});*/
db.collection('Users').findOneAndUpdate({
	_id: new ObjectID('59159d900697600e7428f7f1')
}, {
	$set: {
		name: 'Nayan'
	},
	$inc: {
		age: 1
	}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});



db.close();
});