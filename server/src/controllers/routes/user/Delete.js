const router = require('express').Router();
router.post('/delete', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.user);
        res.json(deleteUser);
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;