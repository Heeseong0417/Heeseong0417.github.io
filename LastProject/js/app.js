const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//localStorage.removeItem(USERNAME_KEY);
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY , username );
    greeting.innerText = `안녕하세요 ${username}님 ! 오늘도 좋은 하루 보내세요~`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY );

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
}else{
greeting.classList.remove(HIDDEN_CLASSNAME);
greeting.innerText = `안녕하세요 ${savedUsername}님 ! 좋은 하루 보내세요~`;
}