const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const messageValue = message.value.trim();
    if(usernameValue == ''){
        setError(username, 'user name be empty');
    }
    else if(usernameValue.length <= '6'){
        setError(username, 'user name be large 6');
    }
    else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'email not empty');
    }else if(!validateEmail(emailValue)){
        setError(email, 'the email is not correct');
    }else{
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password, 'Password not empty');
    }else if(passwordValue.length == '9'){
        setError(email, 'the password = 9 char');
    }else{
        setSuccess(password);
    }
    if(messageValue === ''){
        setError(message, 'Message not empty');
    }else if(messageValue.length == '200'){
        setError(message, 'the Message = 200 char');
    }else{
        setSuccess(message);
    }
}



function setError(input, mess){
    const formControl = input.parentElement;
    const p = formControl.querySelector("p");

    p.innerText = mess;

    formControl.className = "form-control error";
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var body = document.getElementById("body");
var color = document.getElementById("color");
color.addEventListener("click", ()=>{
    
    body.style.backgroundColor = "rgb(37, 37, 37)";
})
