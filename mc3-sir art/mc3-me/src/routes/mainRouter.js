const { Router } = require('express');
const router = Router();

const Account = require('../models/Account.js');

/* 
    TODO 1:   This request handler listens for GET requests to the path `/`.
            This displays `index.hbs` with all the debt accounts currently stored
            in the database. The list should be sorted by last updated, in descending order (i.e., the most recent update is at the top)
*/
router.get('/', async function(req, res) {
    // Your code here. You may replace the code written below.
    const accounts  = await Account.find().sort({lastUpdated: -1});
    const plainAccounts = accounts.map(account => account.toObject()); // error not an own property fix.
    res.render('index', {accounts: plainAccounts});
});

/* 
    TODO 2:   This request handler listens for POST requests to the path `/add-debt`.
            This updates the database by either: (a) creating a new account, if the accountName specified in the request does not exist in the DB yet,
            or (b) updates an existing account by adding the debt, if the accountName specified in the request already exists in the DB.
            Both instances sets the lastUpdated field to the current datetime.

            If successful, sends a response with status code 200, and informs the client whether an account has been created,
            or an existingaccount was simply updated.
            If unsuccessful, sends a response with status code 500.
*/
router.post('/add-debt', async function(req, res) {
    // Your code here.
    try {
        const {accountName, debtAmount} = req.body;
        const accountExists = await Account.findOne({accountName: accountName})
        let message, result;
        if(accountExists) {
            accountExists.debtAmount += debtAmount;
            accountExists.lastUpdated = new Date();
            result = await accountExists.save();
            res.status(200).json({message: "record updated"})

        } else {
            result = await Account.create(
                {
                    accountName: accountName,
                    debtAmount: debtAmount,
                    lastUpdated: new Date(),
                }

            )
            res.status(200).json({message: "account created"})
        }
    } catch (error) {
        res.status(500).json({message: "eror"})

    }

});

module.exports = router;