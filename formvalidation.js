// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const passwordcheck = document.getElementById('passwordcheck');
// form.addEventListener('submit' ,function(e){
//     e.preventDefault();
//     checkinputs()
// })
// function checkinputs(){
//     const usernamevalue = username.value.trim();
//     const emailvalue = email.value.trim();
//     const passwordvalue =password.value.trim();
//     const passwordcheckvalue = passwordcheck.value.trim();
//     if(usernamevalue ===""){
//         setError(username,'can not be empty')
//     }else{
//         setsuccess(username);
//     }
//     if(emailvalue ===""){
//         setError(email ,'Email can not be empty')
//     }
//     if(passwordvalue ===""){
//         setError(password,'password can not be empty')
//     }
//     else{
//         setsuccess(password)
//     }
//     if(passwordcheckvalue ===""){
//         setError(passwordcheck,'password can not be empty');
//     }else if(passwordcheckvalue ===passwordvalue){
//         setsuccess(passwordcheck)
//     }
//     else{
//         setError(passwordcheck,'password does not match')
//     }
// }
// function setError(input,message){
//     const formcontrol = input.parentElement;
//     const small = formcontrol.querySelector('.error');
//     formcontrol.className = 'controll-form fail';
//     small.innerHTML = message;
    
// }
// function setsuccess(input){
//     const controllform = input.parentElement;
//     controllform.className = 'controll-form success'
// }

  const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkinputs();
    
});
function checkinputs(){
    const usernamevalues = username.value.trim();
    const emailvalues = email.value.trim();
    const passwordvalues = password.value.trim();
    const passwordcheckvalues = passwordcheck.value.trim();
    if(usernamevalues ===""){
        setError(username,'username can not be empty');
    }else{
        setSuccess(username)
    }
    if(passwordvalues ===""){
        setError(password,'password can not be empty');
    }
    else{
        setSuccess(password)
    }
    if(passwordcheckvalues ===""){
        setError(passwordcheck,'password can not be empty');
    }
    else if(passwordcheckvalues ===passwordvalues){
        setSuccess(passwordcheck)
    }else{
        setError(passwordcheck,'password does not matched')
    }
}

function setError(input,message){
 const formcontrol = input.parentElement;
 const small  = formcontrol.querySelector('.error');
 formcontrol.className = 'controll-form fail'
 small.innerText = message; 
}
function setSuccess(input){
  const formcontrol1  = input.parentElement;
  formcontrol1.className = 'controll-form success'
}


  