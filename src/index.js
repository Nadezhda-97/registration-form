const formItems = document.querySelectorAll('.form-item');
const button = document.getElementById('form-button');

const validate = () => {
  //
};

const updateView = (result, currentElement, button) => {
  if (result === 'invalid') {
    currentElement.classList.remove('valid');
    currentElement.classList.add('invalid');
    button.setAttribute('disabled', 'disabled');
  } else {
    currentElement.classList.remove('invalid');
    currentElement.classList.add('valid');
    button.removeAttribute('disabled');
  }
};

formItems.forEach((formItem) => {
  formItem.addEventListener('input', (e) => {
    console.log(e.target.value);
    const result = validate();
    updateView(result, firstName, button);
  });
});

// отправка данных на рандомный сервер
button.addEventListener('click', async () => {
  await fetch('/api/random', {
    method: 'POST',
    headers: {'Content-Type': 'form-data'},
    body: '',
  });
});
