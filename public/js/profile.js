const sumbitForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#chart-name').value.trim();
  const dateOfBirth = document.querySelector('#date-birth').value.trim();
  const place = document.querySelector('#place-birth').value.trim();
  const time = document.querySelector('#time-birth').value.trim();
  // const gender = document.querySelector('#gender').value.trim();

  if (name && dateOfBirth && place && time) {
    // /horoscopes is a placeholder
    const response = await fetch('/api/horoscopes', {
      method: 'POST',
      body: JSON.stringify({ name, dateOfBirth, place, time }),
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

    const response = await fetch(`api/horoscopes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete chart');
    }
  }
};
