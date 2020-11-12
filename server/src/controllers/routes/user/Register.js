const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../../../models/userModel');
router.post('/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    if (!username || !password) return res.status(400).json({

        msg: 'field can not be empty'
    });
    if (password.length < 5) return res.status(400).json({
        msg: 'password must 5 charactor'
    });
    if (password !== confirmPassword) return res.status(400).json({
        msg: 'password not match'
    });
    const existingUser = await userModel.findOne({ username });
    if (existingUser) return res.status(400).json({
        msg: 'Email already exitsts'
    });
    console.log('ahihi')
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new userModel({
        username,
        password: passwordHash
    })
    const saveUser = await newUser.save();
    res.json(saveUser);
})
module.exports = router