var logemail = document.querySelector('#logemail');
var logpassword = document.querySelector('#logpassword');
var logsubmit = document.querySelector('#logsubmit');
var logalert = document.querySelector('.logalert');
var loginForm = document.querySelector('.signin');
var sign_up = '../signup.html';
// if (
//     localStorage.getItem('loginState') !== null &&
//     localStorage.getItem('loginState') !== undefined
// ) {
//     var loginState = JSON.parse(localStorage.getItem('loginState'));
// } else {
//     var loginState = false;
// }

var signupbtn = document.querySelector('.signupbtn');
signupbtn.addEventListener('click', function () {
    window.location.href = sign_up;
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
        logpassword.value == JSON.parse(localStorage.getItem('userPassword')) &&
        logemail.value == JSON.parse(localStorage.getItem('userEmail'))
    ) {
        localStorage.setItem('isLogin', JSON.stringify(true));
        window.location.pathname = '/Smart-login-page/home.html';
        console.log('lll');
    } else if (
        logemail.value !== JSON.parse(localStorage.getItem('userEmail'))
    ) {
        logalert.innerHTML = `<p class='text-center pt-3'>Email is not found </p> `;
    } else {
        logalert.innerHTML = `<p class='text-center pt-3'>password is wrong </p> `;
    }
});

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
