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

    let textErrorUsername = document.querySelector('.error-username')
    let textErrorPassword = document.querySelector('.error-password')
    let textErrorEmail = document.querySelector('.error-email')
    let textErrorPhoneNumber = document.querySelector('.error-phone-number')
    // RESULT
    if (username == "" && password == "" && email == "" && number == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else if (username == "" && password == "" && email == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
    } else if (username == "" && email == "" && number == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
        textErrorPhoneNumber.innerHTML = "PhoneNumber Is Required"
    } else if (username == "" && password == "" && number == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else if (password == "" && email == "" && number == "") {
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else if (username == "" && password == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorPassword.innerHTML = "Password Is Required"
    } else if (username == "" && email == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
    } else if (username == "" && number == "") {
        textErrorUsername.innerHTML = "Username Is Required"
        textErrorPhoneNumber.innerHTML = "Number Is Required"
    } else if (password == "" && email == "") {
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorEmail.innerHTML = "Email Is Required"
    } else if (password == "" && number == "") {
        textErrorPassword.innerHTML = "Password Is Required"
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else if (email == "" && number == "") {
        textErrorEmail.innerHTML = "Email Is Required"
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else if (username == "") {
        textErrorPassword.innerHTML = "Username Is Required"
    } else if (password == "") {
        textErrorPassword.innerHTML = "Password Is Required"
    } else if (email == "") {
        textErrorEmail.innerHTML = "Email Is Required"
    } else if (number == "") {
        textErrorPhoneNumber.innerHTML = "Phone Number Is Required"
    } else {
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
    }
})

// LOGOUT BUTTON
logoutButton.addEventListener('click', function logout() {
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
    registButton.style.display = 'block';
    title.innerHTML = "Hi Friends, Let's Register for School Here !";
    registerButton.innerHTML = "Register";

})


// LOGIN->REGISTER
loginToRegister.addEventListener('click', function registerOn() {
    titleLogin.innerHTML = "Register";
    inputPassword.setAttribute("placeholder", "Create A Difficult Password");
    loginToRegister.innerHTML = "Already Have An Account?, Just Log In Now !";
}
)

// REGISTER
registerButton.addEventListener('click', function register() {
    loginSide.style.display = 'flex';
})



// GO LOGIN
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




// LEARN MORE BUTTON
const learnMoreButton = document.querySelector('.learn-more')

learnMoreButton.addEventListener('click', function () {
    location.hash = "#our-profile"
}
)


// SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ", " active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}




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
        gender = "";
    }

    const phoneNumberInput = document.getElementById('phone-number');
    let phoneNumber = phoneNumberInput.value;

    const emailInput = document.getElementById('email');
    let email = emailInput.value;

    const messageInput = document.getElementById('message');
    let message = messageInput.value;

    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    // TAKE RESULT ELEMENT
    const resultP0 = document.querySelector('.i-0');
    const resultP1 = document.querySelector('.i-1');
    const resultP2 = document.querySelector('.i-2');
    const resultP3 = document.querySelector('.i-3');
    const resultP4 = document.querySelector('.i-4');
    const resultP5 = document.querySelector('.i-5');
    const resultP6 = document.querySelector('.i-6');

    // RESULT
    resultP0.innerHTML = "Current Time : " + currentTime + currentHour + currentMinute;
    resultP1.innerHTML = "Name : " + name;
    resultP2.innerHTML = "Birthday : " + birthday;
    resultP3.innerHTML = "Gender : " + gender;
    resultP4.innerHTML = "Phone Number : " + phoneNumber;
    resultP5.innerHTML = "Email : " + email;
    resultP6.innerHTML = "Message : " + message;

    nameInput.value = "";
    birthdayInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";
    messageInput.value = "";
})