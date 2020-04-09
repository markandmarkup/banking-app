const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

function getDbConn(callback) {

    Client.connect((err) => {
        let db = Client.db('banking-app');
        callback(db);
    });

}

module.exports.getDbConn = getDbConn;