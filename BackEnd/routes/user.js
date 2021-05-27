//importing express
// const express = require('express');
//importing router
const router = require('express').Router();
const { postUsers } = require('../controllers/auth');
//importing the schema created.
const RegisterSchemaTemplate = require('../models/RegisterModel');

//setting path route to register
router.post('/register', postUsers);

    module.exports = router;