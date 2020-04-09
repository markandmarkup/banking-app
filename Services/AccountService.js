
function getAllAccounts(db, callback) {
    let collection = db.collection('accounts');
    collection.find({}).toArray((err, docs) => {
        callback(docs);
    });
}

module.exports.getAllAccounts = getAllAccounts;