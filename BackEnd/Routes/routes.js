//importing express
// const express = require('express');
//importing router
const router = require('express').Router();
//importing the schema created.
const RegisterSchemaTemplate = require('../models/RegisterModel');


//setting path route to register
router.post('/register', (req , res) => {
    //requesting to create new schema for new user that will be stored in or var
    const registeredUser = new RegisterSchemaTemplate({
        //getting the details the user entered
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth
    })
    registeredUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        });
    });
    module.exports = router;