var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017/rubanraj';
var updateDocument = function(db, callback) {
	var collection = db.collection('details');
	collection.update({a:3}, {a:4}, function(err, result) {
		assert.equal(null, err);
		assert.equal(1, result.result.n);
		console.log('Updated !!!');
		//callback(result);
	});
};
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log('connected !!!');
	updateDocument(db, function() {
		db.close();
	});
});
