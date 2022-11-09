const showHidenIcon = document.querySelector(".showHiden");
const fields = document.querySelector('.password')

    showHidenIcon.addEventListener('click', ()=> {
        if(fields.type === 'password') {
            fields.type = "text"
            showHidenIcon.classList.replace("fa-eye", "fa-eye-slash");
        }else {
            fields.type = "password";
            showHidenIcon.classList.replace("fa-eye-slash", "fa-eye");
        }
    })