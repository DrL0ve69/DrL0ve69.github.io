const form = document.querySelector('#signupForm');
const inputNom = document.querySelector('#nom');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

/*
form.addEventListener('submit',e=>
{
    e.preventDefault(); // Empêche la validationde base du formulaire
})

// Validation regex
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()