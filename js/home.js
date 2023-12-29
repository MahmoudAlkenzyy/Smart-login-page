const userName = document.querySelector('.userName');
const Root = document.querySelector('.container');
const BG = document.querySelector('.bg');
const logout = document.querySelector('.logout');
Root.addEventListener('mousemove', function (e) {
    BG.style.left = `${e.clientX}px`;
    BG.style.top = `${e.clientY}px`;
});

userName.innerHTML = `Hello ${JSON.parse(localStorage.getItem('userLName'))}`;

logout.addEventListener('click', function () {
    localStorage.removeItem('isLogin');
});
if (JSON.parse(localStorage.getItem('isLogin')) === null) {
    window.location.assign('../index.html');
    console.log(JSON.parse(localStorage.getItem('isLogin')));
}
