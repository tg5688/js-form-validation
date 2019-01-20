function validateName(name) {
  const re = /[0-9]|[\W]|^\s*$/g;
  return re.test(name);
}

function validateDate(date) {
  const re = /^(\d{1,2})[\.](\d{1,2})[\.](\d{4})/;
  return re.test(date);
}

function validateDateRange(date) {
  const array = date.split('.');
  if (parseInt(array[0]) > 31 || parseInt(array[1]) > 12 || parseInt(array[2]) > 2018 || parseInt(array[2]) < 1900) return false;
  return true;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const fName = document.querySelector('#input_imie');
const sName = document.querySelector('#input_nazwisko');
const date = document.querySelector('#input_data_ur');
const email = document.querySelector('#input_email');
const comment = document.querySelector('#komentarz');

const resultsInput = document.querySelectorAll('.error');

function reset() {
  fName.value = '';
  sName.value = '';
  date.value = '';
  email.value = '';
}

function validate(e) {
  e.preventDefault();
  let isError = 0;

  if (validateName(fName.value)) {
    resultsInput[0].textContent = 'Wpisz imię';
    fName.classList.add('invalid');
    isError = 1;
  } else {
    resultsInput[0].textContent = '';
    fName.classList.remove('invalid');
  }

  if (validateName(sName.value)) {
    resultsInput[1].textContent = 'Wpisz nazwisko';
    sName.classList.add('invalid');
    isError = 1;
  } else {
    resultsInput[1].textContent = '';
    sName.classList.remove('invalid');
  }

  if (!validateDate(date.value)) {
    resultsInput[2].textContent = 'Poprawny format daty to dd.mm.yyyy';
    date.classList.add('invalid');
    isError = 1;
  } else if (!validateDateRange(date.value)) {
    resultsInput[2].textContent = 'Wpisano niepoprawną datę urodzenia';
    date.classList.add('invalid');
    isError = 1;
  } else {
    resultsInput[2].textContent = '';
    date.classList.remove('invalid');
  }

  if (!validateEmail(email.value)) {
    resultsInput[3].textContent = 'Wpisano niepoprawny email';
    email.classList.add('invalid');
    isError = 1;
  } else {
    resultsInput[3].textContent = '';
    email.classList.remove('invalid');
  }

  if (comment.value == "") {
    resultsInput[4].textContent = 'Wpisz komentarz';
    comment.classList.add('invalid');
    isError = 1;
  } else {
    resultsInput[4].textContent = '';
    comment.classList.remove('invalid');
  }

  if (isError == 0) {
    alert("Wysłano dane z formularza")
    reset();
    comment.value = '';
  }
}

document.querySelector('.btn').addEventListener('click', validate)