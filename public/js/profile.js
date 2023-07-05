const submitForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#chart-name').value.trim();
  const birthDate = document.querySelector('#date-birth').value.trim();
  const birthPlace = document.querySelector('#place-birth').value.trim();
  const birthTime = document.querySelector('#time-birth').value.trim();

  if (name && birthDate && birthPlace && birthTime) {
    const response = await fetch('/api/charts', {
      method: 'POST',
      body: JSON.stringify({
        name,
        birthDate,
        birthPlace,
        birthTime,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/chart');
    } else {
      alert('Failed to create chart');
    }
  }
};

const delButton = async (event) => {
  console.log('button clicked');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`api/charts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/chart');
    } else {
      alert('Failed to delete chart');
    }
  }
};

// pre-load horoscope data
let horoscopes = {};
const preLoadHoroscopes = async () => {
  // 1: make request to your api endpoint
  horoscopes = await fetch('/api/horoscopes');
  // 5: handle data that came back from your api
}

document
  .querySelector('.new-chart-form')
  .addEventListener('submit', submitForm);

document.querySelector('.chart-list').addEventListener('click', delButton);

// 6: listen for drop down event
  // test
  // target dropdown element
  // add event listener (check your slack messages)
    // target p tag
    // set textcontent of p tag to value of selected option
// 7: load corresponding horoscope data into HTML
