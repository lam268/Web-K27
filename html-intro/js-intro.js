console.log(document);
// get button element
const registerButton = document.querySelector('.button');
console.log(registerButton);

// add event listener
registerButton.addEventListener('click', () => {
  const usernameElement = document.querySelector('.user-input');
  const username = usernameElement.value;
  const emailElement = document.querySelector('.email');
  const email = emailElement.value;
  const pass1Element = document.querySelector('.pass1');
  const pass1 = pass1Element.value;
  const pass2Element = document.querySelector('.pass2');
  const pass2 = pass2Element.value;
  if ( (!username) || (!pass1) || (!email) || (!pass2) ||  (pass1 !== pass2) )  {
    // show error message
     const errorMessageElement = document.querySelector(`.error-message`);
     errorMessageElement.innerText = 'Please input ur data';
  }
});
