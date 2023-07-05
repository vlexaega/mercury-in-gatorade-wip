const submitForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#chart-name').value.trim();
  const birthDate = document.querySelector('#date-birth').value.trim();
  const birthPlace = document.querySelector('#place-birth').value.trim();
  const birthTime = document.querySelector('#time-birth').value.trim();
  const astroSign = document.querySelector('#astro-sign').value.trim();

  if (name && birthDate && birthPlace && birthTime && astroSign) {
    const response = await fetch('/api/charts', {
      method: 'POST',
      body: JSON.stringify({
        name,
        birthDate,
        birthPlace,
        birthTime,
        astroSign,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create chart');
    }
  }
};

const delButton = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`api/charts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete chart');
    }
  }
};

document
  .querySelector('.new-chart-form')
  .addEventListener('submit', submitForm);

document.querySelector('.chart-list').addEventListener('click', delButton);
