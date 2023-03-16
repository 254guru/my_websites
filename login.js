const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const button1popup = document.querySelector('.button1Login-popup');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

button1popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});