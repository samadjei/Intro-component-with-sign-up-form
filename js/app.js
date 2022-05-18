const formInputs = document.querySelectorAll(".form-inputs");
const submitButton = document.querySelector(".form-button");

const firstName = document.querySelector(".form-fname");
const lastName = document.querySelector(".form-lname");
const email = document.querySelector(".form-email");
const pwd = document.querySelector(".form-pwd");

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  getInputs();
});

// Clears inputs when durign browser refresh
window.onload = function () {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  pwd.value = '';
};


function timeOut() {
  let errorInterval = setTimeout(getInputs, 3000);
  return errorInterval;
}

function getInputs() {
  // Get the values of the inputs add .trim() which removes left over spaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();
  if (firstNameValue === '') {
    createError(firstName, 'Username cannot be blank');
  }
  if (lastNameValue === '') {
    createError(lastName, 'Password cannot be blank');
  }
  if (emailValue === '') {
    createError(email, 'Email cannot be blank');
  } else if (!emailValidation(emailValue)) {
    createError(email, 'Not a valid email');
  }
  if (pwdValue === '') {
    createError(pwd, 'Password cannot be blank');
  }
}

// Function to show different messages for the inputs
function createError(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'form-control error';
  span.innerText = message;
}

// Email Validation
function emailValidation(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}