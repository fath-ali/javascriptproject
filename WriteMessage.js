// function showMessageContent(message){
//   const messageContent = document.querySelector('.message-content');
//   messageContent.textContent = `"${message}" - your message is Deliver`
// }
// function showInvalidMessage(){
//     const invalid = document.querySelector('.invalid-message');
//     invalid.style.display = "block";
//     setTimeout(() => {
//         invalid.style.display = 'none';
//     }, 2000);
// }
// function onSubmitForm(e){
//     e.preventDefault();
//     const messageinput = document.querySelector('.message');
//     const message = messageinput.value.trim();
//     if(message ===""){
//         showInvalidMessage();
//     }else{
//         showMessageContent(message);
//         messageinput.value = " "
//     }
// }

// (function(){
//    const form  =document.querySelector('#form');
//    form.addEventListener('submit', onSubmitForm)
   
// })();

function showMessageContent(message){
    const messagecontent =  document.querySelector('.message-content');
    messagecontent.textContent = `"${message}" you message Delivered`
}
function showInvalidMessage(){
    const invalidMessage = document.querySelector('.invalid-message');
    invalidMessage.style.display = 'block';
    setTimeout(() => {
          invalidMessage.style.display = 'none';
    }, 3000);
    
}

function onSubmitForm(e){
    e.preventDefault();
  const messageinput = document.querySelector('.message');
  const message = messageinput.value.trim();
  if(message ===''){
    showInvalidMessage()
  }else{
    showMessageContent(message)
    messageinput.innerHTML =""
  }
  
}

(function(){
    const form = document.querySelector("#form");
     form.addEventListener('submit',onSubmitForm)
})();
