const router = require('express').Router();
const userRoutes = require('./user-routes');
const chartRoutes = require('./chart');
const horoRoutes = require('./horoscopes');

router.use('/users', userRoutes);
router.use('/charts', chartRoutes);
router.use('/horoscopes', horoRoutes)

module.exports = router;
