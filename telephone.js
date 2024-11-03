
const input  = document.querySelector('input');
let firstThreeNumber;
let previousvalueValue = ''
input.addEventListener('input',function(e){
   const inputvalue = e.target.value;
   if(inputvalue.length ===4 && previousvalueValue.length<inputvalue.length){
    firstThreeNumber = inputvalue.substring(0,3);
  input.value = `+(${firstThreeNumber}) - ${inputvalue.length -1}`
     console.log(firstThreeNumber);
     
   }
   previousvalueValue = inputvalue
   
})