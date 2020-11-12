const router = require('express').Router();
const User = require("../../../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            msg: "Data can not be empty!"
        })
    }

    let user;

    try {
        user = await User.findOne({
            username
        });

        if (!user) {
            return res.status(400).json({
                msg: "User not found!"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password!" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username
            }
        });

    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;