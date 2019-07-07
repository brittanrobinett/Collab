const express = require('express');
const router = express.Router();

// Bring in User Model
let user = require('../models/user')

// Register Form
router.get('/register', function (req, res) {
    res.render('register');
})

// Register Prrocess
rrouter.post('/register', function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('email', 'Email is not a student email').contains(".edu");
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
})

module.exports = router;