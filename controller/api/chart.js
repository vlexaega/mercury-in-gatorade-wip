const router = require('express').Router();
const { Chart } = require('../../models');

router.get('/', async (req, res) => {
  console.log('session for getting all charts', req.session);
  const chartData = await Chart.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });
  res.status(200).json(chartData);
});

router.post('/', async (req, res) => {
  try {
    console.log('req.body', req.body)
    const newChart = await Chart.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newChart);
  } catch (err) {
    console.error('api chart post fail', err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  console.log(req.session.user_id);
  console.log(req.params.id);
  try {
    const chartData = await Chart.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    console.log(`HI`);
    if (!chartData) {
      res.status(404).json({ message: 'No chart found with this id!' });
      return;
    }

    res.status(200).json(chartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
