const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://fortune-cookie4.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '1c80cf076fmsh16ee6c98767b11dp1197c9jsn1b984ba5f989',
    'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}