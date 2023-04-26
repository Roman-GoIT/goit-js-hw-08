import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';
const emailForm = document.querySelector('input[name = email]');
const messageForm = document.querySelector('textarea[name = message]');

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const formData = {
    email: emailForm.value,
    message: messageForm.value,
  };
  localStorage.setItem('key', JSON.stringify(formData));
  if (localStorage.getItem(key)) {
    const previousData = JSON.parse(localStorage.getItem(key));
    emailForm.value = previousData.email;
    messageForm.value = previousData.message;
  }
};

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  const formData = {
    email: emailForm.value,
    message: messageForm.value,
  };
  event.preventDefault();
  localStorage.removeItem(key);
  emailForm.value = '';
  messageForm.value = '';
  console.log(formData);
};
