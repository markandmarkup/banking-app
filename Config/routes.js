const AccountController = require('../Controllers/AccountController');

function routes(app) {

    app.get('/admin/accounts', AccountController.getAllAccounts);
    app.post('/admin/accounts', AccountController.createAccount);

}

module.exports = routes;