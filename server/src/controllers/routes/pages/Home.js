const router = require('express').Router();
const auth = require('../../middleware/auth');
router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    console.log(user);
    res.json({
        username: user.username,
        id: user._id
    });
})
module.exports = router;


// nhap email , kt email => gui ve email + token ramdom link/token , user nhan link./toekn   