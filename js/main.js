var logemail = document.querySelector('#logemail');
var logpassword = document.querySelector('#logpassword');
var logsubmit = document.querySelector('#logsubmit');
var logalert = document.querySelector('.logalert');
var loginForm = document.querySelector('.signin');

// if (
//     localStorage.getItem('loginState') !== null &&
//     localStorage.getItem('loginState') !== undefined
// ) {
//     var loginState = JSON.parse(localStorage.getItem('loginState'));
// } else {
//     var loginState = false;
// }

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

if (window.location.pathname == '/signup.html') {
    var firstName = document.querySelector('#firstName');
    var lastName = document.querySelector('#lastName');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var submit = document.querySelector('#submit');
    var alert = document.querySelector('.alert');
    var signupForm = document.querySelector('.signup');
    var loginbtn = document.querySelector('#goLogin');

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
            window.location.assign('../index.html');
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
        window.location.assign('../index.html');
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
} else if (window.location.pathname == '/index.html') {
    var signupbtn = document.querySelector('.signupbtn');
    signupbtn.addEventListener('click', function () {
        window.location.assign('../signup.html');
        console.log('asc');
    });
    if (
        JSON.parse(localStorage.getItem('isLogin')) !== null &&
        JSON.parse(localStorage.getItem('isLogin')) !== undefined
    ) {
        window.location.assign('../home.html');
    }
    console.log(logsubmit);
    logsubmit.addEventListener('click', function (e) {
        e.preventDefault();
        if (
            logpassword.value ==
                JSON.parse(localStorage.getItem('userPassword')) &&
            logemail.value == JSON.parse(localStorage.getItem('userEmail'))
        ) {
            localStorage.setItem('isLogin', JSON.stringify(true));
            window.location.assign('../home.html');
            console.log('lll');
        } else if (
            logemail.value !== JSON.parse(localStorage.getItem('userEmail'))
        ) {
            logalert.innerHTML = `<p class='text-center pt-3'>Email is not found </p> `;
        } else {
            logalert.innerHTML = `<p class='text-center pt-3'>password is wrong </p> `;
        }
    });
} else if (window.location.pathname == '/home.html') {
    const userName = document.querySelector('.userName');
    const Root = document.querySelector('.container');
    const BG = document.querySelector('.bg');
    const logout = document.querySelector('.logout');
    Root.addEventListener('mousemove', function (e) {
        BG.style.left = `${e.clientX}px`;
        BG.style.top = `${e.clientY}px`;
    });

    userName.innerHTML = `Hello ${JSON.parse(
        localStorage.getItem('userLName')
    )}`;

    logout.addEventListener('click', function () {
        localStorage.removeItem('isLogin');
    });
    if (JSON.parse(localStorage.getItem('isLogin')) === null) {
        window.location.assign('../index.html');
        console.log(JSON.parse(localStorage.getItem('isLogin')));
    }
}

console.log(JSON.parse(localStorage.getItem('isLogin')));

// window.location.href = 'www.example.com';
// function goLogin() {
//     window.location.href = '../index.html';
//     console.log('assadsssssss');
// }
// signupbtn.addEventListener('click', function () {
//     window.location.href = '../signup.html';
//     console.log('assad');
// });

// logsubmit.addEventListener('click', function (e) {
//     e.preventDefault();
//     for (var i = 0; i < allUsers.length; i++) {
//         if (
//             logemail.value.toLowerCase() === allUsers[i].email.toLowerCase() &&
//             logpassword.value == allUsers[i].password
//         ) {
//             state = 'logedIn';
//             localStorage.setItem('loginState', JSON.stringify(loginState));
//         } else if (
//             logemail.value.toLowerCase() !== allUsers[i].email.toLowerCase()
//         ) {
//             logalert.innerHTML = `<p class="px-3 pt-2">Email not found </p>`;
//         } else {
//             logalert.innerHTML = `<p class="px-3 pt-2"> Wrong Password </p>`;
//         }
//     }
//     cheackState();
// });
// function cheackState() {
//     if (state == 'signup') {
//         signupForm.classList.remove('d-none');
//         loginForm.classList.add('d-none');
//     } else if (state == 'login') {
//         signupForm.classList.add('d-none');
//         loginForm.classList.remove('d-none');
//     } else if ((state = 'logedIn')) {
//         location.assign('./home.html');
//         console.log('3');
//     }
//     console.log(state);
// }
// cheackState();

// console.log(loginState);
