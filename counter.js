// const text = document.querySelector('textarea');
// const counter = document.querySelector('.counter');
// function countingcharacter(){
//     const textlenght = text.value.length;
//     console.log(textlenght)
//     counter.innerText = `${textlenght}`;
// }
const textea = document.querySelector('textarea');
const counter = document.querySelector('.counter');
textea.addEventListener('keyup',function(){
    let display = textea.value.length;
     counter.innerHTML = `${display}`
})
