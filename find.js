var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017/rubanraj';
var findDocument = function(db, callback) {
	var collection = db.collection('details');
	collection.find({}).toArray(function(err, docs) {
		assert.equal(err, null);
		assert.equal(5, docs.length);
		console.log('Found !!!' +docs);
		console.dir(docs);
		callback(docs);
	});
}
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log('connected !!!');
	findDocument(db, function() {
		db.close();
	});
});
