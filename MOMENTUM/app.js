const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.toggle("hidden");
    greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${userName}`; // `(백틱) %{변수명} `(백틱)
    greeting.classList.toggle("hidden");
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit)