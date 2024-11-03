// const buttons = document.querySelectorAll('.btn-counter');
// let count = 0;
// const counter = document.querySelector('.counter-machine');
// const counter_container = document.querySelector('.counter');
// buttons.forEach(function(button){
//     button.addEventListener('click',function(){
//         if(button.classList.contains('descrease-btn')){
//             count--;
//         }else if(button.classList.contains('increase-btn')){
//             count++;
//         }
//         if(count>0){
//             counter_container.classList.remove('negative');
//             counter_container.classList.add('positive')
//         }
//         else if(count<0){
//         counter_container.classList.remove('positive');
//         counter_container.classList.add('negative');
//         }
//         else{
//             counter_container.classList.remove('negative');
//             counter_container.classList.remove('positive')
//         }
//         counter.textContent = count;
//     })
// })
let count = 0;
const btns =document.querySelectorAll('.btn-counter');
const counter_container = document.querySelector('.counter');
const counter  =document.querySelector('.counter-machine');

btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.classList.contains('descrease-btn')){
            count--;
        }else if(btn.classList.contains('increase-btn')){
            count++;
        }
        if(count>0){
            counter_container.classList.remove('negative');
            counter_container.classList.add('positive')
        }else if(count<0){
            counter_container.classList.remove('positve');
            counter_container.classList.add('negative')
        }else{
            counter_container.classList.remove('negative');
            counter_container.classList.remove('positive')
        }
         counter.textContent = count
    })
    
})