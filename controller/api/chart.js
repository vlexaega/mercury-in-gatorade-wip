const router = require('express').Router();
const { Chart } = require('../../models');

router.get('/', async (req, res) => {
  const chartData = await Chart.findAll();
  res.status(200).json(chartData);
});

router.post('/', async (req, res) => {
  try {
    const newChart = await Chart.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newChart);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const chartData = await Chart.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    console.log(req.session);
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
