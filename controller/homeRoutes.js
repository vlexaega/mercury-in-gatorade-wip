const router = require('express').Router();
const { User } = require('../models');

router.get('/', aysnc (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('homepage', {
            users,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;