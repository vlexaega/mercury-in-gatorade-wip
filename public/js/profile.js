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
      console.error('failed response', response);
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
      document.location.replace('/charts');
    } else {
      alert('Failed to delete chart');
    }
  }
};
document.querySelector('.delete').addEventListener('click', delButton);
document.querySelector('.new-chart-form')
.addEventListener('submit', submitForm)








// 6: listen for drop down event
// test
// target dropdown element
// add event listener (check your slack messages)
// target p tag
// set textcontent of p tag to value of selected option
// 7: load corresponding horoscope data into HTML
