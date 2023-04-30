import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';
const emailForm = document.querySelector('input[name = email]');
const messageForm = document.querySelector('textarea[name = message]');
let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onInput, 500));
function onInput() {
  formData.email = emailForm.value;
  formData.message = messageForm.value;
  localStorage.setItem(key, JSON.stringify(formData));
  if (localStorage.getItem(key)) {
    const previousData = JSON.parse(localStorage.getItem(key));
    emailForm.value = previousData.email;
    messageForm.value = previousData.message;
  }
}

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  formData.email = emailForm.value;
  formData.message = messageForm.value;
  localStorage.removeItem(key);
  emailForm.value = '';
  messageForm.value = '';
  console.log(formData);
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem(key)) {
    const previousData = JSON.parse(localStorage.getItem(key));
    emailForm.value = previousData.email;
    messageForm.value = previousData.message;
  }
});
