//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect toMongoDb Server');
	}
	console.log('Connected to MongoDb successfully');

//deleteMany
/*db.collection('Todos').deleteMany({text :'Eat lunch'}).then((result) =>{
	console.log(result);
});
db.collection('Todos').deleteOne({text :'Eat lunch'}).then((result) =>{
	console.log(result);
});
db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
	console.log(result);
});*/

//db.collection('Users').deleteMany({name: 'Nayan'});

db.collection('Users').findOneAndDelete({_id: new ObjectID("591457bdeac0461030bfa2c0")}).then((result) => {
	console.log(JSON.stringify(result, undefined, 2));
});

//db.close();
});