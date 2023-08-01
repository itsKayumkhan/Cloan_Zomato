
// login and sing up

const log = document.querySelector('.main-login');
const sign = document.querySelector('.main-sing');
const close = document.querySelectorAll('.icon-clo');
const mainCard = document.querySelector('.account');

close[0].addEventListener('click', () => {
  mainCard.style.display = 'none';
});
close[1].addEventListener('click', () => {
  mainCard.style.display = 'none';
});

const signup = document.querySelectorAll('.singUp');
const login = document.querySelectorAll('.logIn');

signup.forEach((item) => {
  item.addEventListener('click', () => {
    mainCard.style.display = 'flex';
    log.style.display = 'none';
    sign.style.display = 'flex';
    console.log("hello");
  });
  
})
login.forEach((item) =>{
  item.addEventListener('click', () => {
    mainCard.style.display = 'flex';
    log.style.display = 'flex';
    sign.style.display = 'none';
  
  });
})