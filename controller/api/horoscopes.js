require('dotenv').config();
// 2: handle request from your frontend
router.get('/', (req, res) => {
    // 3: get data from third party api
    const options = {
        method: 'GET',
        url: 'https://horoscope34.p.rapidapi.com/api/horoscope/today',
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com',
        },
      };
      res.json(options);

    // 4: respond to your front end with data
})