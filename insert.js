var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017/rubanraj';
var insertDocuments = function(db, callback) {
	var collection = db.collection('details');
	collection.insertMany([{a: 1}, {a:2}, {a:3}], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log('inserted !!!');
		callback(result);
	});
}

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log('Connected to server !!!');
	//db.close();
	insertDocuments(db, function() {
		db.close();
	});
});


