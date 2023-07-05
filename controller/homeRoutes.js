const router = require('express').Router();
const { User, Chart } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');
require('dotenv').config();

router.get('/', async (req, res) => {
  //Fortune Cookie Return
  let response;
  const options = {
    method: 'GET',
    url: 'https://fortune-cookie4.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com',
    },
  };

  try {
    response = await axios.request(options);
    console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
      fortune_response: response.data.data.message,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  let response;
  const options = {
    method: 'GET',
    url: 'https://horoscope34.p.rapidapi.com/api/horoscope/today',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com',
    },
  };

  try {
    response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Chart],
    });
    const user = userData.get({ plain: true });
    console.log(user);
    res.render('profile', {
      ...user,
      logged_in: true,
      signsAq: response.data.payload.Aquarius,
      signsAr: response.data.payload.Aries,
      signsCa: response.data.payload.Cancer,
      signsCap: response.data.payload.Capriocorn,
      signsGem: response.data.payload.Gemini,
      signsLeo: response.data.payload.Leo,
      signsLib: response.data.payload.Libra,
      signsPic: response.data.payload.Pisces,
      signsSag: response.data.payload.Sagittarius,
      signsScor: response.data.payload.Scorpio,
      signsTau: response.data.payload.Taurus,
      signsVir: response.data.payload.Virgo,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/chart', async (req, res) => {
  try {
    const chartData = await Chart.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const charts = chartData.map((chart) => chart.get({ plain: true }));
    res.render('chart', {
      charts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/charts/:id', async (req, res) => {
  try {
    const chartData = await Chart.findByPk(req.params.id);
    console.log(chartData);
    const chart = chartData.get({ plain: true });
    res.render('chart', { chart });
  } catch (error) {
    res.json(error);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
module.exports = router;

//Fortune Cookie Route
