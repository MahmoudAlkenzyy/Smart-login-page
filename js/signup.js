var firstName = document.querySelector('#firstName');
var lastName = document.querySelector('#lastName');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var submit = document.querySelector('#submit');
var alert = document.querySelector('.alert');
var signupForm = document.querySelector('.signup');
var loginbtn = document.querySelector('#goLogin');
var nameRegx = '';
var emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;
var nameRegx = /^[a-zA-Z ]{3,}$/;
///regex and validation
function test(element, regex) {
    element.addEventListener('keyup', function (e) {
        if (regex.test(element.value)) {
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        } else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
        }
        sumbitDisabled();
    });
}

test(email, emailRegx);
test(firstName, nameRegx);
test(lastName, nameRegx);
test(password, passwordRegx);

submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (email.value == JSON.parse(localStorage.getItem('userEmail'))) {
        alert.classList.remove('d-none');
        alert.innerHTML = ` This email is already in use`;
    } else if (
        lastName.classList.contains('is-valid') &&
        firstName.classList.contains('is-valid') &&
        email.classList.contains('is-valid') &&
        password.classList.contains('is-valid')
    ) {
        var fName = firstName.value;
        var lName = lastName.value;
        var uEmail = email.value;
        var uPassword = password.value;

        localStorage.setItem('userFName', JSON.stringify(fName));
        localStorage.setItem('userLName', JSON.stringify(lName));
        localStorage.setItem('userEmail', JSON.stringify(uEmail));
        localStorage.setItem('userPassword', JSON.stringify(uPassword));

        alert.classList.add('d-none');
        window.location.pathname = '/';
    } else {
        submit.setAttribute('disabled', '');
        alert.classList.remove('d-none');
        alert.innerHTML = `
       
                                    <span class="fw-bold">Name</span>: must be
                                    at least 3 characters
                                    <br />
                                    <span class="fw-bold">Password</span>: must
                                    be at least 8 characters including a
                                    lowercase, uppercase letter, and a number
                                    <br />
        `;
    }
});
loginbtn.addEventListener('click', function () {
    window.location.pathname = '/Smart-login-page/';
    console.log(location.pathname);
});
// sign in validation
function sumbitDisabled() {
    if (
        firstName.classList.contains('is-valid') &&
        lastName.classList.contains('is-valid') &&
        email.classList.contains('is-valid') &&
        password.classList.contains('is-valid')
    ) {
        submit.removeAttribute('disabled');
        console.log(true);
    } else {
        submit.setAttribute('disabled', '');
        console.log(false);
    }
}
