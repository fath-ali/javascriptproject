// function randomgenerator(min,max){
//     return Math.floor(Math.random() * (max - min + 1) +min);
// }
// document.getElementById('generator').addEventListener('click',function(){
//     let min = 1;
//     let max = 100;
//     let randomNumber = randomgenerator(min,max);
//     document.getElementById('result').textContent = randomNumber
// })
let btn = document.getElementById('generator');
let result = document.getElementById('result');
btn.addEventListener('click',function(){
    let m = 1;
    let x =100;
    let rando1 = radomGn(m,x);
    
    result.innerHTML = rando1
})
function radomGn(min, mx){
    let display = Math.floor(Math.random() * (mx -min +1) +min);
    return display;
    
}
