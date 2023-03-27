'use strict';
const form = document.querySelector('.form');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cnfrmPassword');
let enterCaptcha = document.getElementById('confirmCaptcha');
let submit = document.getElementById('btnCA');
let showPass = document.getElementById('showPass');
let showCnfPass = document.getElementById('showCnfPass');
const btnTheme = document.getElementById('theme');
const moon = document.querySelector('.themeChange')
const body = document.querySelector('.mainContainer');
let captchaString = "";
const btnReset = document.getElementById('btnR');
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateString(){
    for(let i = 0; i<6; i++){
        captchaString += letters.charAt(Math.floor(Math.random() * letters.length))
    }
}

// console.log(captchaString);




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

function generateCaptchaBG(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F5C6EC";
    ctx.fillRect(0,0, 200, 50);

}

function init(){
    generateCaptchaBG();
    generateString();
    generateCaptcha();
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

function toggleEye(element, elementSelected){
    if(elementSelected.classList.contains('fa-eye-slash')){
        elementSelected.classList.remove('fa-eye-slash');
        elementSelected.classList.add('fa-eye');
        const type = element.getAttribute('type') === 'password' ? 'text' : 'password';
        element.setAttribute('type', type);
    }
    else{
        elementSelected.classList.add('fa-eye-slash');
        elementSelected.classList.remove('fa-eye');
        const type = element.getAttribute('type') === 'password' ? 'text' : 'password';
        element.setAttribute('type', type);
    }
}
showPass.addEventListener('click', function(e){
    
    toggleEye(password, showPass);
})
showCnfPass.addEventListener('click', function(e){
    toggleEye(confirmPassword, showCnfPass);
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

btnTheme.addEventListener('click', function(e){
    e.preventDefault();
    if(moon.classList.contains('fa-moon')){
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');
        body.classList.remove('bg-light');
        body.classList.add('bg-dark');
        form.classList.remove('bg-form-light');
        form.classList.add('bg-form-dark');
        btnTheme.classList.remove('icon-light');
        btnTheme.classList.add('icon-dark');

    }
    else{
        moon.classList.add('fa-moon');
        moon.classList.remove('fa-sun');
        body.classList.add('bg-light');
        body.classList.remove('bg-dark');
        form.classList.add('bg-form-light');
        form.classList.remove('bg-form-dark');
        btnTheme.classList.add('icon-light');
        btnTheme.classList.remove('icon-dark');
    }
})
init();