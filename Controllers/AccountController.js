const DbService = require('../Services/DbService');
const AccountService = require('../Services/AccountService');

function getAllAccounts(req, res) {

    DbService.getDbConn((db) => {
        AccountService.getAllAccounts(db, (allAccounts) => {
            res.json({"data": allAccounts});
        });
    });
}

function createAccount(req, res) {
    //get db connection
    
}

module.exports.getAllAccounts = getAllAccounts;