const sumbitForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#chart-name').value.trim();
  const dateOfBirth = document.querySelector('#date-birth').value.trim();
  const place = document.querySelector('#place-birth').value.trim();
  const time = document.querySelector('#time-birth').value.trim();

  if (name && dateOfBirth && place && time) {
    const response = await fetch('/api/charts', {
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
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.chart-list')
  .addEventListener('click', delButtonHandler);
