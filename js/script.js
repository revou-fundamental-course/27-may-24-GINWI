// LOGIN
const sumbitLoginButton = document.getElementById('login-sumbit');
const loginToRegister = document.querySelector('.do-not');
const titleLogin = document.querySelector('.login-side-title');
const inputPassword = document.getElementById('password');
const logoutButton = document.querySelector('.logout')
const loginButton = document.querySelector('.login')
const registButton = document.querySelector('.regist')
const title = document.querySelector('.title')
const registerButton = document.querySelector('.register');
const loginSide = document.querySelector('.login-register-side');

loginButton.addEventListener('click', function goLogin() {
    loginSide.style.display = "flex";
    titleLogin.innerHTML = "Login"
})

registButton.addEventListener('click', function goLogin() {
    loginSide.style.display = "flex";
    titleLogin.innerHTML = "Register";
    inputPassword.setAttribute("placeholder", "Create A Difficult Password");
    loginToRegister.innerHTML = "Already Have An Account?, Just Log In Now !";
})

sumbitLoginButton.addEventListener('click', function login() {
    // INPUT
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    const emailInput = document.getElementById('emaiL');
    const email = emailInput.value;

    const numberInput = document.getElementById('phonenumber');
    const number = numberInput.value;

    // RESULT
    title.innerHTML = "Hi " + username + ", Welcome To Our Website";

    loginSide.style.display = "none";

    registerButton.innerHTML = "Change Account";
    logoutButton.style.display = 'block';
    loginButton.style.display = 'none';
    registButton.style.display = 'none';

    usernameInput.value = "";
    passwordInput.value = "";
    numberInput.value = "";
    emailInput.value = "";
})

logoutButton.addEventListener('click', function logout() {
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
    registButton.style.display = 'block';
    title.innerHTML = "Hi Friends, Let's Register for School Here !";
    registerButton.innerHTML = "Register";

})

loginToRegister.addEventListener('click', function registerOn() {
    titleLogin.innerHTML = "Register";
    inputPassword.setAttribute("placeholder", "Create A Difficult Password");
    loginToRegister.innerHTML = "Already Have An Account?, Just Log In Now !";
}
)

registerButton.addEventListener('click', function register(){
    loginSide.style.display = 'flex';
})

















// RESULT MESSAGE US
const sumbitButton = document.getElementById('sumbit');

sumbitButton.addEventListener('click', function resultMessage(event) {
    event.preventDefault();
    // INPUT
    const nameInput = document.getElementById('name');
    const name = nameInput.value;

    const birthdayInput = document.getElementById('birthday');
    let birthday = birthdayInput.value;

    const genderInputMan = document.getElementById('man');
    const genderInputWoman = document.getElementById('woman');
    let gender = "";

    if (genderInputMan.checked) {
        gender = "Man";
    } else if (genderInputWoman.checked) {
        gender = "Woman";
    } else {
        gender = "Custom";
    }

    const phoneNumberInput = document.getElementById('phone-number');
    let phoneNumber = phoneNumberInput.value;

    const emailInput = document.getElementById('email');
    let email = emailInput.value;

    const messageInput = document.getElementById('message');
    let message = messageInput.value;



    // RESULT
    // TIME
    let currentTime = new Date();
    let currenHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();


    const resultP0 = document.querySelector('.i-0');
    const resultP1 = document.querySelector('.i-1');
    const resultP2 = document.querySelector('.i-2');
    const resultP3 = document.querySelector('.i-3');
    const resultP4 = document.querySelector('.i-4');
    const resultP5 = document.querySelector('.i-5');
    const resultP6 = document.querySelector('.i-6');

    // WORK
    resultP0.innerHTML = "Current Time : " + currentTime + currenHour + currentMinute + currentSecond;
    resultP1.innerHTML = "Name : " + name;
    resultP2.innerHTML = "Birthday : " + birthday;
    resultP3.innerHTML = "Gender : " + gender;
    resultP4.innerHTML = "Phone Number : " + phoneNumber;
    resultP5.innerHTML = "Email : " + email;
    resultP6.innerHTML = "Message : " + message;
})