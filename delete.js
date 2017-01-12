var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    url = 'mongodb://localhost:27017/rubanraj';
var deleteDocument = function(db, callback) {
	var collection = db.collection('details');
	collection.deleteOne({ a : 3 }, function(err, result) {
		assert.equal(null, err);
		assert.equal(1, result.result.n);
		console.log('Removed !!!');
		callback(result);
	});
}
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log('connected !!!');
	deleteDocument(db, function() {
		db.close();
	});
});
