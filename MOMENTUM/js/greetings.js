const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 크게 중요하지 않은, 그냥 문자열 같은 경우에는 변수명을 대문자로만 작성하기도 함.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    paintGreetings(userName);
    console.log(userName);
    localStorage.setItem(USERNAME_KEY, userName);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    paintGreetings(savedUsername);
}