'use strict';
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cnfrmPassword');
let enterCaptcha = document.getElementById('confirmCaptcha');
let submit = document.getElementById('btnCA');
let showPass = document.getElementById('showPass');
let showCnfPass = document.getElementById('showCnfPass');

let captchaString = "";
const btnReset = document.getElementById('btnR');
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateString(){
    for(let i = 0; i<6; i++){
        captchaString += letters.charAt(Math.floor(Math.random() * letters.length))
    }
}
generateString();
console.log(captchaString);




function generateCaptcha(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "italic 30px Lato";
    var text = captchaString;
    for(let i= 0; i<6; i++){
        let letter = text[i];
        ctx.fillStyle = "black";
        ctx.fillText(letter, 30*(i)+10 ,Math.floor(20 + Math.random()*20))
    }

}
generateCaptcha();
function generateCaptchaBG(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F5C6EC";
    ctx.fillRect(0,0, 200, 50);

}
btnReset.addEventListener('click', function(e){
    e.preventDefault();
    captchaString = '';
    generateCaptchaBG();
    generateString();
    console.log(captchaString);
    generateCaptcha();
    enterCaptcha.value = ''
    
})

showPass.addEventListener('click', function(e){
    if(showPass.classList.contains('fa-eye-slash')){
        showPass.classList.remove('fa-eye-slash');
        showPass.classList.add('fa-eye');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    }
    else{
        showPass.classList.add('fa-eye-slash');
        showPass.classList.remove('fa-eye');
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    }
})
showCnfPass.addEventListener('click', function(e){
    if(showCnfPass.classList.contains('fa-eye-slash')){
        showCnfPass.classList.remove('fa-eye-slash');
        showCnfPass.classList.add('fa-eye');
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
    }
    else{
        showCnfPass.classList.add('fa-eye-slash');
        showCnfPass.classList.remove('fa-eye');
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
    }
})
submit.addEventListener('click', function(e){
    e.preventDefault();
    let a = true;
    if(fullName.value.trim().length < 1){
        fullName.classList.add('error');
        console.log(`error`);
        a = false;
    }
    if(email.value.trim().length < 1){
        email.classList.add('error');
        console.log(`error`);
        a = false;
    }
    if(password.value.trim().length < 1){
        password.classList.add('error');
        console.log(`error`);
        a = false;
    }
    if(confirmPassword.value.trim().length < 1){
        
        confirmPassword.classList.add('error');
        console.log(`error`);
        a = false;
    }
    if(confirmPassword.value !== password.value){
        confirmPassword.classList.add('error');
        
        console.log(`error`);
        a = false;
    }
    if(enterCaptcha.value !== captchaString){
        enterCaptcha.classList.add('error');
        console.log(`error`);
        a = false;
    }
    if(a){
        console.log(confirmPassword.value);
        console.log(password.value);
        alert(`FullName: ${fullName.value}, Email: ${email.value}, Password: ${password.value}, Captcha Entered: ${enterCaptcha.value}`);
        fullName.value = email.value = password.value = confirmPassword.value = enterCaptcha.value = '';
        fullName.classList.remove('error');
        email.classList.remove('error');
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        enterCaptcha.classList.remove('error');
        
    }
})