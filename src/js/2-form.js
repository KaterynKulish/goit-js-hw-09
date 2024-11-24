const formData = {
  email: '',
  message: '',
};

const LocSt_key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', inFormValue);
function inFormValue(event) {
  const element = form.elements;

  formData.email = element.email.value.trim();
  formData.message = element.message.value.trim();

  localStorage.setItem(LocSt_key, JSON.stringify(formData));
}
savedDates();
function savedDates() {
  const values = JSON.parse(localStorage.getItem(LocSt_key));
  console.log(values);
  if (values) {
    formData.email = values.email || '';
    formData.message = values.message || '';
    form.elements.email.value = values.email || '';
    form.elements.message.value = values.message || '';
  }
}

form.addEventListener('submit', handleSabmit);
function handleSabmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    form.reset();
    localStorage.removeItem(LocSt_key);
  }
}
