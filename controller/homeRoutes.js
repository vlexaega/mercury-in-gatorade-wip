const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in){
        res.redirect('/profile');
        return;
    }

    res.render('login');
});
module.exports = router;
