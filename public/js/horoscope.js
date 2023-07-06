// pre-load horoscope data
let horoscopes = {};
const preLoadHoroscopes = async () => {
  console.log('preloading horoscopes');
  // 1: make request to your api endpoint
  const response = await fetch('/api/horoscopes', {
    method: 'GET',
  });
  // 5: handle data that came back from your api
  horoscopes = await response.json();

  console.log('Horoscopes grabbed: ', horoscopes);
};

const selectElement = document.querySelector('#choices');
const result = document.querySelector('#horoscope');
console.log(selectElement.value);

selectElement.addEventListener('change', (event) => {
  result.textContent = `${event.target.value}`;
});


preLoadHoroscopes();