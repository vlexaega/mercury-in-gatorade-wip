const router = require('express').Router();

require('dotenv').config();
// 2: handle request from your frontend
router.get('/', async (req, res) => {
    // 3: get data from third party api
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com',
        },
      };
      const response = await fetch('https://horoscope34.p.rapidapi.com/api/horoscope/today', options);
      const horoscopes = await response.json();
      console.log(horoscopes)
      res.json(horoscopes);

    // 4: respond to your front end with data
})

module.exports = router;