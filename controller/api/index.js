const router = require('express').Router();
const userRoutes = require('./user-routes');
const chartRoutes = require('./chart');

router.use('/users', userRoutes);
router.use('/charts', chartRoutes);

module.exports = router;
