const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    const className = password.getAttribute('type') === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    togglePassword.setAttribute('class', className);

});
