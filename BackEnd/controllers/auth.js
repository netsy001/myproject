const User = require("../models/User");

export const postUsers = (req, res) => {
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
};


exports.register = (req, res, next) =>{
    const {fullName,username,password,email} = req.body;
    try {
        const user = await User.create({
            fullName,
            username,
            password,
            email
        });
        res.status(201).json({

            success:true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
        });
    }
};

exports.login = (req, res, next) =>{
    res.send("Login Route");
};
exports.forgotpassword = (req, res, next) =>{
    res.send("forgot Route");
};
exports.resetpassword = (req, res, next) =>{
    res.send("Reset password Route");
};
