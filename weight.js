// const form = document.querySelector('form');
// form.addEventListener('submit',function(e){
//    e.preventDefault();
//    const input = document.querySelector('input');
//    const span = document.querySelector('span');
//    let kgtopound;
//    if(isNaN(input .value) ||input.value<=0 ) {
//       span.classList.add('error');
//       console.log(span);
      
//       span.innerHTML = "<p >Please Enter a valid number</p>"
//       setTimeout(() => {
//            span.innerHTML  = "";
//            span.classList.remove('error');
//       }, 2500);
//        input.value = ""
//    }else{
//     kgtopound = (input.value) * 2.20462;
//     span.classList.add('successful');
//     span.innerHTML = `${kgtopound.toFixed(2)}`
//     setTimeout(() => {
//         span.innerHTML = "";
//         span.classList.remove('successful')
//          input.value =  " ";
//     }, 2500);

//    }
   
// })

const form  =document.querySelector('form');
form.addEventListener('submit',function(e){
   e.preventDefault();
   const input = document.querySelector('input');
   const convertweight  = document.getElementById('convert-weight');
   let kgon;
   if(isNaN(input.value) || input.value<=0){
      convertweight.classList.add('error');
      convertweight.innerHTML = '<p>please enter invalid number</p>';
      setTimeout(() => {
           convertweight.classList.remove('error');
      },2500);
   }else{
      kgon = (input.value) * 2.20462;
      convertweight.classList.add('success');
      convertweight.innerHTML = `${kgon.toFixed()}`
      setTimeout(() => {
         convertweight.classList.remove('success');
         convertweight.innerHTML = ''
      }, 2500);

      input.value =''
   }
})

